import DOMPurify from "dompurify";

export const createMarkup = (dirty: string) => ({ __html: DOMPurify.sanitize(dirty) });
