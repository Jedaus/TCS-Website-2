// Site-wide facts. Everything here is real and confirmed, except the three
// empty values below, which the client still has to supply.
export const PHONE = '07 3299 1978';
export const PHONE_HREF = 'tel:+61732991978';
export const EMAIL = 'totalcabinetsupplies@gmail.com';
export const ADDRESS = '68 Compton Rd, Woodridge QLD';
export const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=68+Compton+Rd+Woodridge+QLD';

// TODO(client): the white-labelled goCabinets links and the tutorial video.
// While empty, the buttons stay visible but point at the quote form, and the
// video dialog says the tutorial is on its way.
export const GOCABINETS_PORTAL_URL = '';
export const GOCABINETS_PLANNER_URL = '';
export const TUTORIAL_YOUTUBE_ID = '';

export const portalHref = GOCABINETS_PORTAL_URL || '#quote';
export const plannerHref = GOCABINETS_PLANNER_URL || '#quote';
