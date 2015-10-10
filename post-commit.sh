# Add to .git/hooks/post-commit
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
    exit 1
  fi
else
  echo Tests failed, build cancelled.
  exit 1
fi
echo Post-commit script done.
