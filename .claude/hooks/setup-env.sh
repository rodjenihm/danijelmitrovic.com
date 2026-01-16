#!/bin/bash

if [ -n "$CLAUDE_ENV_FILE" ]; then
  echo 'source ~/.nvm/nvm.sh' >> "$CLAUDE_ENV_FILE"
fi

exit 0
