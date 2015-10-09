echo 'Running pre-commit script...'
echo 'Running tests...'
npm test
if [ $? -eq 0 ]; then
  echo OK
else
  echo FAIL
fi
echo 'Tests complete.'
echo 'Building...'
npm run build
echo 'Build complete.'
echo 'Pre-commit script done.'
