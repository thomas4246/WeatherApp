import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>© {year} Thomas Lin. All rights reserved.</p>
    </footer>
  );
}
