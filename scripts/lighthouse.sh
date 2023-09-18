set -e
OUTPUT=temp/lighthouse-report.json
mkdir -p temp
THRESH=0.95

if [ ! -d dist ]; then
  GZIP=true yarn run build
fi

nohup yarn run start >/dev/null 2>&1 &

sleep 10

npx lighthouse http://127.0.0.1:8081 --output=json --output-path=$OUTPUT \
--chrome-flags="--headless" --emulated-form-factor=desktop \
--throttling.cpuSlowdownMultiplier=1 --throttling.throughputKbps=10240 --throttling.rttMs=40

json=`cat $OUTPUT`

performance=`echo $json | jq ".categories.performance.score"`
accessibility=`echo $json | jq ".categories.accessibility.score"`
bestPractices=`echo $json | jq ".categories.\"best-practices\".score"`
seo=`echo $json | jq ".categories.seo.score"`

echo "PERFORMANCE: $performance"
echo "ACCESSIBILITY: $accessibility"
echo "BEST PRACTICES $bestPractices"
echo "SEO: $seo"

if (( $(echo "$performance < $THRESH" |bc -l) )); then
  echo "PERFORMANCE SCORE NOT ACCEPTABLE $performance < $THRESH"
  exit 1
fi

if (( $(echo "$accessibility < $THRESH" |bc -l) )); then
  echo "ACCESSIBILITY SCORE NOT ACCEPTABLE $accessibility < $THRESH"
  exit 1
fi

if (( $(echo "$bestPractices < $THRESH" |bc -l) )); then
  echo "BEST PRACTICES SCORE NOT ACCEPTABLE $bestPractices < $THRESH"
  exit 1
fi

if (( $(echo "$seo < $THRESH" |bc -l) )); then
  echo "SEO SCORE NOT ACCEPTABLE $seo < $THRESH"
  exit 1
fi

exit 0