
import axios from "axios";
import axiosAPIWithAuth from "./axiosAPIWithAuth";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export async function getPresignedUrl(fileName: string, contentType: string) {
  const response = await axiosAPIWithAuth.post("/data-storage/get-presigned-url", {
    fileName,
    contentType,
  });

  return response.data;
}

export async function uploadToS3(presignedUrl: string, file: Blob) {
  const result = await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
  return result.status === 200;
}

export const allowedCountryCodes = [

  {

    name: "United States",
    dialCode: "+1",
    isoCode: "US",
  },
  {

    name: "CANADA",
    dialCode: "+1",
    isoCode: "CA",
  },
  {

    name: "United Kingdom",
    isoCode: "GB",
    dialCode: "+44",
  },
  {

    name: "India",
    isoCode: "IN",
    dialCode: "+91",
  }
];


export const coachesdomains = [
  { id: 0, label: 'Select Domain', value: '' },
  { id: 1, label: 'Health & Fitness', value: 'health_fitness' },
  { id: 2, label: 'Beauty', value: 'beauty' },
  { id: 3, label: 'Fashion', value: 'fashion' },
  { id: 4, label: 'Travel', value: 'travel' },
  { id: 5, label: 'Home & Living', value: 'home_living' },
  { id: 6, label: 'Business', value: 'business' },
  { id: 7, label: 'Finance', value: 'finance' },
  { id: 8, label: 'Technology', value: 'technology' },
  { id: 9, label: 'Gaming', value: 'gaming' },
  { id: 10, label: 'Entertainment', value: 'entertainment' },
  { id: 11, label: 'Current Affairs', value: 'current_affairs' },
  { id: 12, label: 'Arts', value: 'arts' },
  { id: 13, label: 'History', value: 'history' }
];

export const respondToData = [
  {
    id: 1,
    name: "comments",
    label: "Comments",
    description: "Respond to Instagram Comments",
    checked: false,
  },
  {
    id: 1,
    name: "dms",
    label: "DMs",
    description: "Respond to Instagram DMs",
    checked: false,
  },
];

export const  coachesdesignation = [
  { id: 0, label: 'Select designation', value: '' },
  { id: 1, label: 'Coach', value: 'coach' },
  { id: 2, label: 'Model', value: 'model' },
  { id: 3, label: 'Vlogger', value: 'vlogger' },
  { id: 4, label: 'Blogger', value: 'blogger' },
  { id: 5, label: 'Influencer', value: 'influencer' },
  { id: 6, label: 'Photographer', value: 'photographer' },
  { id: 7, label: 'Programmer', value: 'programmer' },
  { id: 8, label: 'Gamer', value: 'gamer' },
  { id: 9, label: 'Entertainer', value: 'entertainer' }
];

