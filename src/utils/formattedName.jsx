import React from 'react';

export const formattedName = (name) => {
  const hasUnderscore = name.includes('_');
  return hasUnderscore ? name.replace("_", " ") : name;
}
