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
    items.push({
      id: doc.id,
      ...doc.data(),
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
const getBlogList = async (maxBlogCount) => {
  const blogDatabase = await (
    maxBlogCount ? latestBlog.limit(maxBlogCount).get() : latestBlog.get()
  );
  return snapshotToList(blogDatabase);
};

const updateBlog = (id, blogInfo) => blogCollection.doc(id).update(blogInfo);

const addBlog = (blogInfo) => blogCollection.doc().set(blogInfo);

const getBlog = async (id) => {
  const blog = await blogCollection.doc(id).get();
  if (!blog) return null;
  return {
    id: blog.id,
    ...blog.data(),
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
