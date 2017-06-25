set -e
echo "Enter archive version: "
read RELEASE

read -p "Archiving $RELEASE - are you sure (y/n)" -n 1 -r
echo #
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Archiving $RELEASE ..."

  RELEASE=$RELEASE npm run archive
fi