#!/bin/sh

RED='\033[30;31m'
GREEN='\033[0;32m'
YARN_VERSION=$(yarn --version)


if yarn --version | grep -q '^1.[[:digit:]]*.[[:digit:]]*'; then
  echo "$GREEN yarn version correct $YARN_VERSION"
else
  echo ""
  echo ""
  echo ""
  echo "$RED----------------------------------------------------------------"

  i=0;
  while [ $i -le 5 ];
    do echo "$RED|           |                                   |              |";
    i=$((i+1));
  done

  echo "$RED-------------   Yarn required > 1 but has $YARN_VERSION   ----------------"

  j=0;
  while [ $j -le 5 ];
    do echo "$RED|           |                                   |              |";
    j=$((j+1));
  done
  echo "$RED----------------------------------------------------------------"
  echo ""
  echo ""
  echo ""
  exit 1
fi


