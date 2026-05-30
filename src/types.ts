/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number; // For flat rate or standard price, or half portion
  priceFull?: number; // Optional full portion price
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  createdAt: string;
}

export interface MessageFeedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
