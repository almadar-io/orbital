import React from "react";
import { ModelList } from "@markab.io/orbital-templates";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./Settings.styles";
import userSchema from "../Models/user";

const Settings = ({
  settings,
  settings_createModel,
  settings_getModel,
  settings_updateModel,
  settings_deleteModel,
  settings_searchModel,
  settings_gallery_upload,
  settings_media_upload,
  settings_media,
  settings_gallery,
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
  return (
    <ModelList
      modelArray={settings}
      modelKey={"name"}
      modelName={"settings"}
      columns={["name", "email"]}
      modelSchema={userSchema}
      createModel={settings_createModel}
      updateModel={settings_updateModel}
      getModel={settings_getModel}
      deleteModel={settings_deleteModel}
      searchModel={settings_searchModel}
      uploadMedia={settings_media_upload}
      uploadGallery={settings_gallery_upload}
      gallery={settings_gallery}
      media={settings_media}
      location={location}
      match={match}
      history={history}
      classes={classes}
      form={form}
      notifications={notifications}
      saveNotification={saveNotification}
      removeNotification={removeNotification}
    />
  );
};

export default withStyles(styles)(Settings);
