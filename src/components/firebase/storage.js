/* eslint-disable import/prefer-default-export */
import { storage } from './firebase';

const uploadImage = async (id, file) => {
  const storageRef = storage.ref();
  const filenamesplit = file.name.split('.');
  const extension = filenamesplit[filenamesplit.length - 1];

  const uploadTask = storageRef.child(`gallery/${id}.${extension}`);
  const snapshot = await uploadTask.put(file);
  const url = await snapshot.ref.getDownloadURL();
  return url;
};

const uploadBlogImage = async (id, file) => {
  const storageRef = storage.ref();
  const { name } = file;

  const uploadTask = storageRef.child(`blog/${id}/${name}`);
  const snapshot = await uploadTask.put(file);
  const url = await snapshot.ref.getDownloadURL();
  return url;
};

export {
  uploadImage,
  uploadBlogImage,
};
