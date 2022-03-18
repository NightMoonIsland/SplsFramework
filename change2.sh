#!/bin/sh
 
git filter-branch --env-filter '
 
OLD_EMAIL="yanqi@yanqi.com"
CORRECT_NAME="spls"
CORRECT_EMAIL="spls@spls.com"
 
# 可以通过或关系重写多个用户名
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags