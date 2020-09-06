/* eslint-disable import/prefer-default-export */
import { firestore } from './firebase';

const workCollection = firestore.collection('gallery');
const latestWork = workCollection.orderBy('updatedAt', 'desc');
const blogCollection = firestore.collection('blog');
const latestBlog = blogCollection.orderBy('createdAt', 'desc');

let workList = [];
let blogList = [];
let blogTable = {};

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

const loadWorkList = async () => {
  const list = await latestWork.get();
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
  workList = items;
};
const loadBlogList = async () => {
  const list = await latestBlog.get();
  const items = [];
  const itemTable = {};
  list.forEach((doc) => {
    const blog = doc.data();
    const item = {
      id: doc.id,
      createdAt: formatDate(blog.createdAt.toDate(), 'YYYY年MM月DD日'),
      content: blog.content,
      images: blog.images || [],
      tags: blog.tags,
      title: blog.title,
    };
    items.push(item);
    itemTable[doc.id] = item;
  });
  blogList = items;
  blogTable = itemTable;
};

loadWorkList();
loadBlogList();

// works
const getWorkList = async (maxWorkCount) => (
  maxWorkCount && maxWorkCount <= workList.length ? workList.slice(0, maxWorkCount) : workList
);

const updateWork = (id, workInfo) => {
  workCollection.doc(id).update(workInfo);
  loadWorkList();
};

const addWork = (workInfo) => {
  workCollection.doc().set(workInfo);
  loadWorkList();
};

// blogs
const getBlogList = async (maxBlogCount) => (
  maxBlogCount && maxBlogCount <= blogList.length ? blogList.slice(0, maxBlogCount) : blogList
);

const updateBlog = (id, blogInfo) => {
  blogCollection.doc(id).update(blogInfo);
  loadBlogList();
};

const addBlog = (blogInfo) => {
  blogCollection.doc().set(blogInfo);
  loadBlogList();
};

const getBlog = async (id) => blogTable[id];
export {
  getWorkList,
  updateWork,
  addWork,
  getBlogList,
  updateBlog,
  addBlog,
  getBlog,
};
