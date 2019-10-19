import React from "react";
import { ModelList } from "Templates";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./User.styles";
import userSchema from "../Models/user";

const User = ({
  users,
  users_createModel,
  users_getModel,
  users_updateModel,
  users_deleteModel,
  users_searchModel,
  users_gallery_upload,
  users_media_upload,
  users_media,
  users_gallery,
  location,
  match,
  history,
  classes,
  form,
  notifications,
  saveNotification,
  removeNotification,
  ...rest
}) => {
  console.log(classes, "classes", "user");
  return (
    <ModelList
      modelArray={users}
      modelKey={"name"}
      modelName={"users"}
      columns={["name", "email"]}
      modelSchema={userSchema}
      createModel={users_createModel}
      updateModel={users_updateModel}
      getModel={users_getModel}
      deleteModel={users_deleteModel}
      searchModel={users_searchModel}
      uploadMedia={users_media_upload}
      uploadGallery={users_gallery_upload}
      gallery={users_gallery}
      media={users_media}
      location={location}
      match={match}
      history={history}
      classes={classes}
      form={form}
      notifications={notifications}
      saveNotification={saveNotification}
      removeNotification={removeNotification}
      gridDisplay={true}
      {...rest}
    />
  );
};

export default withStyles(styles)(User);
