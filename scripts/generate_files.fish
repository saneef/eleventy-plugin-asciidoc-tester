#!/usr/bin/env fish

set -l CUR_PATH (dirname (status --current-filename))
set -l GEN_PATH $CUR_PATH"/../src/pages"

mdkir $GEN_PATH

set -l SEQ (seq -f "%05g" 1 1000)

for S in $SEQ
  set -l FILE_PATH $GEN_PATH"/"$S"-test.adoc"
  touch $FILE_PATH
  printf "---
layout: base.njk
---
= Test document "$S"

Sample content" > $FILE_PATH
  echo "Created: "$FILE_PATH
end
