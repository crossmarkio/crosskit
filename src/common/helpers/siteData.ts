export const getSiteName = (window: Window): string => {
  const document = window.document;

  const siteName: HTMLMetaElement | null = document.querySelector(
    'head > meta[property="og:site_name"]'
  );

  const metaTitle: HTMLMetaElement | null = document.querySelector(
    'head > meta[name="title"]'
  );

  if (siteName) return siteName.content;
  if (metaTitle) return metaTitle.content;
  if (document.title && document.title.length > 0) return document.title;

  return window.location.hostname;
};

export const getSiteImage = async (window: Window): Promise<string | null> => {
  const document = window.document;
  const icons: NodeListOf<HTMLLinkElement> = document.querySelectorAll(
    'head > link[rel~="icon"]'
  );

  for (const icon of icons) {
    if (icon && (await validImg(icon.href))) {
      return icon.href;
    }
  }

  return null;
};

export const getSiteMeta = async () => {
  return {
    name: getSiteName(window),
    img: await getSiteImage(window),
  };
};

const validImg = (href: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    try {
      const img = document.createElement("img");
      img.src = href;
      img.onload = () => resolve(true);
      img.onerror = () => reject(false);
    } catch (e) {
      reject(false);
    }
  });
};
