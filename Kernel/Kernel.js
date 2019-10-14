import React from "react";
import Knowledge from "../Knowledge/Knowledge";
const Kernel = ({
  kernel,
  kernel_createModel,
  kernel_getModel,
  kernel_updateModel,
  kernel_deleteModel,
  kernel_searchModel,
  kernel_gallery_upload,
  kernel_media_upload,
  kernel_media_delete,
  location,
  match,
  history,
  classes,
  form,
  notifications,
  saveNotification,
  removeNotification,
  modelName,
  getUnsplash,
  kernel_createKnowledge,
  kernel_updateKnowledge,
  kernel_searchKnowledge,
  deleting,
  setDeleting,
  kernel_loading
}) => {
  const props = {
    knowledge: kernel,
    knowledge_createModel: kernel_createModel,
    knowledge_getModel: kernel_getModel,
    knowledge_updateModel: kernel_updateModel,
    knowledge_deleteModel: kernel_deleteModel,
    knowledge_searchModel: kernel_searchModel,
    location,
    match,
    history,
    classes,
    form,
    notifications,
    saveNotification,
    removeNotification,
    modelName,
    getUnsplash,
    knowledge_createKnowledge: kernel_createKnowledge,
    knowledge_updateKnowledge: kernel_updateKnowledge,
    knowledge_searchKnowledge: kernel_searchKnowledge,
    deleting,
    setDeleting,
    knowledge_loading: kernel_loading
  };
  return <Knowledge {...props} />;
};
export default Kernel;
