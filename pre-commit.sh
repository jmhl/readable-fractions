echo Running post-commit script...
echo Running tests...
npm test
if [ $? -eq 0 ]; then
  echo Tests complete.
  echo Building...
  npm run build
  echo Build complete.
else
  echo Tests failed, build cancelled.
fi
echo Post-commit script done.
