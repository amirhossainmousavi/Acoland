import { memo, SVGAttributes } from "react";

export const MailIcon = memo(({ ...rest }: SVGAttributes<SVGElement>) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <rect width="30" height="30" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#image0_8_2" transform="scale(0.0333333)" />
      </pattern>
      <image
        id="image0_8_2"
        width="30"
        height="30"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALwSURBVEhL5ZbZi81hGMfnYOxrUYSU3PEnuBhLkbENI0lZa3ChKctkKbKLhMSVpST7hX1LliI3SrlRtgsJN4xlzJhhjM9H76vfnDlnzOI0F3716XnP+b3v+32f532e55xUXhs9qTbSzWtb4bq6uvZ43gXa5TgCP9m/KpVK1f72GOF+mBnQJ8fCH9n/HLxJITqAgQfYDYXQLUfilex7HVZApcJ7GByAGtgA03MgruiFsP8PbInC1Qwuwib4BGUwG3r+I8+/sM8Z2AH5sAqKFP7GwKRSfBuUQynMgV6tFP/M+lPgNXYGw1ykXhTuxAc9vwpbgvhS7ELo3kLxCtYdD6JWjJGcBOZQdVLY/avABNDz92BYZkKPZop/Zf4J2AVRdGLCiQbC7m8i3AziH7Armymu6HkwUT2wnk5Ii1xG4ej5DQbrwXvSFocwNea8EbsEa8Lc1VjD2zVtUVZh53nnFrt3buFvhWkZNol7mqTmyDIwZ/R4CphU6U+jwk7+DpdhHbyDvTAVvLfkYw+4BiVgJcR+YPlkev4q7KLbUEZ/fUjpuelRGA8dw4612LtQzJxy5oxgvDPMyaLbMKuTE+0wJpnePocCeASG3bqcDB2Cp4uxRmFkWDMQa8MYG+akHyCrx4b4HpgcL4O4DeUKbIQXYI+38byGwWGOCXgaTK4hYFKOgRideICMwibVA9gMT2A5LIDeYdUt7BF4DIZ5eHg/Lry3CmwctuChsBYKIJlkDYQVvR8WPcXa4uYnROOJtfb1uizvFD8E/gANCuKjsDEp6wmbmYbXUD4D7822GT1NijZlbC4chH0J8dHB8z/C/gO5A9asootgCfRtikIjc+x8h2F/ELcFm3B58WfR/qyn1qrhndsKT9PP4ZXYty0xy9GELVT4GAOb+VvwRPPChFY6W295TLjtYe9ShYfxwRd2m1k5EI0nUONs0MmPf/b684V12tJEamp0DPtJeBWF7an+hOX6f7blV0Frrcm1UNZI/H/CvwCfJQDKuqtjGgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
));

MailIcon.displayName = "MailIcon";

export default MailIcon;
