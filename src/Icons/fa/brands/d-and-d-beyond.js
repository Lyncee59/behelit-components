// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFabDAndDBeyond = props => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M285.96 215.41c0-5.69 1.58-15.4 9.61-20.51-.13 0-3.68-.78-8.97 1.12 2.03-3.05 9.97-7.85 10.41-7.85-8.17-26.05-37.99-22.91-32.2-22.91-30.92 0-32.64.34-39.89-4.01.13.76.52 8.16 9.61 14.9 1.6 1.28 2.88 2.4 2.88 6.57v38.77c0 4.17-.8 5.29-2.72 6.41-.12.07-7.52 4.46-7.85 4.65h35.08c10.02 0 17.41-1.53 25.95-8.65-.64-4.97.16-9.45.8-12.02.01-.16-1.75 1.44-2.71 3.53zm-29.96.8v-34.6c4.58 0 23.07-3.34 23.07 17.3 0 20.72-18.37 17.3-23.07 17.3zm104.77 8.65c.73-1.46 1.8-5.04-.16-8.97.72.12 5.61.48 5.61 4.49 0 2.88-2.89 4.16-5.45 4.48zm14.58 7.69h-.32c3.59-4.31 3.41-11.94-2.24-16.34 1.17 0 19.7 3.2 19.7-17.3 0-20.73-18.36-17.3-23.07-17.3v4.33c-5.39-.77-7.45.27-7.53.32 2.08-1.76 4.49-2.56 6.09-2.88-7.05-1.6-13.62 2.4-14.58 3.52.8-1.76 2.4-3.36 3.52-4.49-2.24.8-4.33 1.92-6.09 3.04 0-5.18.26-7.45-2.88-9.45-9.1-6.57-9.49-14.17-9.61-14.9 7.07 4.24 7.69 4.01 39.89 4.01 32.67 1.56 33.8 29.83 33.8 33.48.01 6.63-3.32 33.96-36.68 33.96zm-11.38-19.39c-2.4 0-4.97.48-4.97.48-.48-.48-3.68-2.88-5.13-3.2 4.03 4.28.46 9.83-3.04 7.21v-15.7c.64-.8 1.28-1.76 2.08-2.56 1.76-2.08 4.65-3.36 7.53-3.36 1.76 0 3.52.48 4.65 1.44l.96.64.8-.8c.48-.48 1.6-.96 2.72-1.44v18.42c-1.75-.81-3.51-1.13-5.6-1.13zm-3.2-21.78c-5.93-.8-15.06 3.2-19.7 8.97.96-3.84 5.13-10.09 10.25-12.98 0 0-2.56 3.2-1.44 3.68 1.6.8 5.77-5.77 11.21-5.93 0 0-4.01 1.92-3.2 3.36.64.96 3.36-1.28 8.01-1.28 5.77 0 10.89 3.52 13.3 6.25-4.01-1.12-11.53.8-13.78 2.72-.26-.2-11.76-8.92-21.95 15.54-4.78-3.83-4.44-3.7-6.41-4.49 4.33-6.07 13.3-15.36 23.71-15.84zm-62.48-17.95c-.2-2.3.05-19.79 20.03-18.9 11.21.64 16.66 8.33 16.66 16.5 0 4.33-2.24 10.09-5.45 13.78-2.21-2.21-5.56-4.66-7.69-7.85 3.84-5.61 2.24-14.42-4.65-14.42-4.33 0-7.85 4.49-6.41 9.93-.64 2.4-.96 5.61-.48 8.01-4.97-2.56-6.57-5.93-7.53-8.97-1.28 2.56-2.08 6.09-1.12 9.45.01.32-2.88-2.24-3.36-7.53zm2.89 13.62c-.48 1.76-7.05 3.68-10.25 6.89 4.81-.96 7.05-.16 7.85 1.76.48 1.44-.16 3.36-.48 5.61 1.6-1.76 7.05-5.45 11.05-6.25-.96-.32-3.36-.8-4.33-.8 2.88-3.36 9.29-4.49 12.82-3.68-2.24-.16-6.73 1.12-8.49 2.56 1.6.32 3.04.64 4.33 1.12-2.08.8-4.81 3.36-5.77 6.09 7.03-4.96 13.07 5.16 7.05 8.17.8.16 2.72 0 3.52-.48-.32 1.12-1.92 3.04-3.04 3.36 2.88 0 7.05-1.92 8.17-4.65 0 0-1.76.64-2.56-.16s.32-4.33.32-4.33c-2.28 2.93-3.42-1.31-1.28-4.17-.96-.32-3.52-.64-4.65-.48 3.2-1.12 10.41-1.76 11.21-.32.64 1.12-.96 3.36-.96 3.36 4.01-.5 8.26 1.13 6.73 5.13 2.88-1.44 5.45-5.93 4.81-10.41-.32.96-1.6 2.4-2.88 2.72.16-1.44-.96-2.24-1.92-2.56 1.7-9.62-14.62-14.23-14.1-23.87-.96 1.28-1.76 4.97-.8 7.05 2.72 3.2 8.65 6.73 10.09 12.18-2.56-6.41-15.06-11.37-14.58-20.19-1.6 1.6-2.56 7.85-1.28 11.05 2.4 1.44 4.49 3.84 4.81 6.09-2.24-5.13-11.37-6.09-13.94-12.18-.64 2.24-.32 4.97.96 6.73 0 0-2.24-.8-7.05-.64 1.59.65 4.96 3.54 4.64 5.3zm25.95 7.37c-2.72 0-3.52-2.08-4.17-4.33 3.21 1.29 4.17 4.33 4.17 4.33zm34.92 41.81c1.92 1.76 6.57 3.04 8.97 1.92-3.89 6.92-23.07 7.53-23.07-6.41-2.88 2.88-2.08 7.37 0 9.29-2.24-.64-5.77-3.04-6.41-7.37-1.31-10.05 4.4-6.46-10.41-18.1-4.81-3.68-3.04-6.57-4.01-8.49-1.1-2.21-6.98-4.13-4.49-8.49-.16 1.6.96 2.88 2.56 3.52 1.76.64 3.2.16 4.81.96 1.76 1.12.96 3.84 2.24 4.97 1.12.8 4.17-.32 6.57 1.76 2.56 2.08 8.17 6.73 10.57 8.65 4.33 3.52 8.81-.48 7.37-4.65 4.49 2.56 4.97 9.93 1.28 12.5 10.59 2.41 12.97-10.04 4.97-11.37 7.21-.64 13.46 4.33 13.46 10.73-.31 6.42-6.88 11.54-14.41 10.58zm-23.39-12.65c-3.84 7.85-11.05 17.94-24.83 17.94-9.96 0-16.08-7.05-15.54-7.05-4.25-5.66-3 .3-2.4 1.92-10.89-10.25-5.29-25.31-5.13-25.95.64-1.92 0-2.24-.64-1.92-.96.32-2.08 1.92-2.08 1.92.8-9.13 9.29-14.74 9.29-14.74l.16.16c.96 1.44-.48 3.2-.64 8.97 1.6-2.24 7.85-6.57 11.37-7.85-1.12 1.44-2.08 3.52-2.08 6.57 3.71-4.18 7.51-2.65 8.01-2.4-12.18 11.85-7.05 26.59 3.2 26.59 5.77 0 11.53-6.41 13.94-10.73 2.42 2.41 6.32 5.51 7.37 6.57zm15.86 34.6c-73.94 0-77.47 99.32-.32 99.32 77.89 0 74.07-99.32.32-99.32zm-.32 77.54c-37.37 0-36.89-55.27.16-55.27 36.87 0 38.83 55.27-.16 55.27zm130.73-74.5h39.25l-7.37 8.33v85.23H495.5c-4.01-12.66-44.86-45.02-48.54-55.59h-.32v47.42l7.37 8.17h-38.93l7.21-8.33v-76.9l-7.37-8.49h31.56c2.88 9.45 39.73 36.53 45.18 50.94h.32v-42.45l-7.05-8.33zm94.67-2.08c-20.67 0-40.05 1.28-50.3 2.08l7.37 8.17v77.22l-7.37 8.17c10.41.8 30.92 2.08 51.58 2.08 42.13 0 59.11-20.67 59.11-48.86.01-29.32-23.22-48.86-60.39-48.86zm-15.05 75.61V281.4c30.07-3.34 46.78 3.8 46.78 26.27-.01 25.61-21.46 30.25-46.78 27.08zm-301.5 11.7l7.21 8.17h-42.61l7.69-8.17-.16-19.38-44.06-65.84h44.86l-6.41 7.21 20.99 37.17h.32l20.51-37.17-6.09-7.21h41.65l-44.06 66.16.16 19.06zm-63.12-12.98l-14.1 21.15h.16-81.38l7.37-8.17v-77.06l-7.37-8.17 73.53-.16v.16l14.1 20.99h-52.39v14.9h37.17l-14.1 21.15v.16l-23.07-.16v15.38l60.08-.17zM79.94 305.92c17.15-4.57 16.18-18.04 16.18-19.86 0-20.57-24.14-24.99-37.01-24.99H3.04l8.33 8.65v29.48H0l11.37 14.58v32.2l-8.33 8.65c61.74 0 73.81 1.54 86.35-5.93 6.73-4.01 9.93-9.77 9.93-17.62 0-5.13 2.62-18.79-19.38-25.16zm-41.33-27.56c19.98 0 29.64-.85 29.64 9.13v3.04c0 12.08-18.96 8.81-29.64 8.81v-20.98zm32.84 49.99c0 11.2-12.43 9.29-32.84 9.29v-22.59c12.2 0 32.68-2.28 32.68 8.81v4.49h.16z" />
  </svg>
);

export const FabDAndDBeyond = withStyle(
  SvgFabDAndDBeyond,
  "FabDAndDBeyond",
  false
);
