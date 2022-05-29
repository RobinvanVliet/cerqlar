import { CareerEntry } from '../types';

export default function mapCareer ({
  fields: {
    title,
    url
  } = {}
}) {
  return title && {
    title,
    url
  }
}
