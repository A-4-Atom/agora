/**
 * Agora - Close the loop
 * © 2021-2023 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

function workspace() {
    this.workspaceRid = -1;
    this.workspaceId = -1;
    this.workspaceVersion = 1;
    this.workspaceName = "";
    this.workspaceDescription = "";
    this.workspaceImage = "";
    this.active = true;
    this.completable = false;
    this.createTime;
    this.visibility = "private";
    this.ownedBy = -1;

    this.topics = [];
}

exports.emptyWorkspace = () => {
    return new workspace();
};

exports.ormWorkspace = function ( row ) {
    let workspace = exports.emptyWorkspace();
    workspace.workspaceRid = row.workspace_rid;
    workspace.workspaceId = row.workspace_id; // TODO: Once database change goes through, this will need to be updated to row.workspaceId.
    workspace.workspaceVersion = row.workspace_version;
    workspace.workspaceName = row.workspace_name;
    workspace.workspaceDescription = row.workspace_description;
    workspace.workspaceImage = row.workspace_image;
    workspace.active = row.active;
    workspace.completable = row.completable;
    workspace.createTime = row.create_time;
    workspace.visibility = row.visibility;
    workspace.ownedBy = row.owned_by;
    return workspace;
};