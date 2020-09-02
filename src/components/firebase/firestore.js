/* eslint-disable import/prefer-default-export */
import { firestore } from './firebase';

const workCollection = firestore.collection('gallery');
const latestWork = workCollection.orderBy('updatedAt', 'desc');
const blogCollection = firestore.collection('blog');
const latestBlog = blogCollection.orderBy('createdAt', 'desc');

// works
const snapshotToList = (list) => {
  const items = [];
  list.forEach((doc) => {
    const d = doc.data();
    items.push({
      id: doc.id,
      description: d.description,
      link: d.link,
      sourcecode: d.sourcecode,
      src: d.src,
      tags: d.tags,
      title: d.title,
    });
  });
  return items;
};
const getWorkList = async (maxWorkCount) => {
  const workDatabase = await (
    maxWorkCount ? latestWork.limit(maxWorkCount).get() : latestWork.get()
  );
  return snapshotToList(workDatabase);
};

const updateWork = (id, workInfo) => workCollection.doc(id).update(workInfo);

const addWork = (workInfo) => workCollection.doc().set(workInfo);

// blogs
const formatDate = (date, _format) => {
  let format = _format || 'YYYY-MM-DD hh:mm:ss';
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, (`0${date.getMonth() + 1}`).slice(-2));
  format = format.replace(/DD/g, (`0${date.getDate()}`).slice(-2));
  format = format.replace(/hh/g, (`0${date.getHours()}`).slice(-2));
  format = format.replace(/mm/g, (`0${date.getMinutes()}`).slice(-2));
  format = format.replace(/ss/g, (`0${date.getSeconds()}`).slice(-2));
  return format;
};
const snapshotToBlogList = (list) => {
  const items = [];
  list.forEach((doc) => {
    const blog = doc.data();
    items.push({
      id: doc.id,
      createdAt: formatDate(blog.createdAt.toDate(), 'YYYY年MM月DD日'),
      content: blog.content,
      images: blog.images,
      tags: blog.tags,
      title: blog.title,
    });
  });
  return items;
};
const getBlogList = async (maxBlogCount) => {
  const blogDatabase = await (
    maxBlogCount ? latestBlog.limit(maxBlogCount).get() : latestBlog.get()
  );
  return snapshotToBlogList(blogDatabase);
};

const updateBlog = (id, blogInfo) => blogCollection.doc(id).update(blogInfo);

const addBlog = (blogInfo) => blogCollection.doc().set(blogInfo);

const getBlog = async (id) => {
  const blog = await blogCollection.doc(id).get();
  if (!blog) return null;
  return {
    id,
    createdAt: formatDate(blog.createdAt.toDate(), 'YYYY年MM月DD日'),
    content: blog.content,
    images: blog.images,
    tags: blog.tags,
    title: blog.title,
  };
};
export {
  getWorkList,
  updateWork,
  addWork,
  getBlogList,
  updateBlog,
  addBlog,
  getBlog,
};
