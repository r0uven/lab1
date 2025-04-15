'use client';

import { useEffect, useState } from 'react';

export function PreloadIframe() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Предзагрузка только на клиенте
    setShouldRender(true);
  }, []);

  if (!shouldRender) return null;

  return (
    <iframe
      src="https://r0uven.github.io/test3/index.html"
      style={{ display: 'none' }}
      width={0}
      height={0}
      title="Preload hidden iframe"
    />
  );
}
