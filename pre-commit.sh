echo Running post-commit script...
echo Running tests...
npm test
if [ $? -eq 0 ]; then
  echo Tests complete.
  echo Building...
  npm run build
  if [ $? -eq 0 ]; then
    echo Build complete.
  else
    echo Build failed.
  fi
else
  echo Tests failed, build cancelled.
fi
echo Post-commit script done.
