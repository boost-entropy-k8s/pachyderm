// source: pfs/pfs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var auth_auth_pb = require('../auth/auth_pb.js');
goog.object.extend(proto, auth_auth_pb);
var task_task_pb = require('../task/task_pb.js');
goog.object.extend(proto, task_task_pb);
var protoextensions_validate_pb = require('../protoextensions/validate_pb.js');
goog.object.extend(proto, protoextensions_validate_pb);
goog.exportSymbol('proto.pfs_v2.ActivateAuthRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ActivateAuthResponse', null, global);
goog.exportSymbol('proto.pfs_v2.AddFile', null, global);
goog.exportSymbol('proto.pfs_v2.AddFile.SourceCase', null, global);
goog.exportSymbol('proto.pfs_v2.AddFile.URLSource', null, global);
goog.exportSymbol('proto.pfs_v2.AddFileSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.AuthInfo', null, global);
goog.exportSymbol('proto.pfs_v2.Branch', null, global);
goog.exportSymbol('proto.pfs_v2.BranchInfo', null, global);
goog.exportSymbol('proto.pfs_v2.BranchPicker', null, global);
goog.exportSymbol('proto.pfs_v2.BranchPicker.BranchName', null, global);
goog.exportSymbol('proto.pfs_v2.BranchPicker.PickerCase', null, global);
goog.exportSymbol('proto.pfs_v2.CheckStorageRequest', null, global);
goog.exportSymbol('proto.pfs_v2.CheckStorageResponse', null, global);
goog.exportSymbol('proto.pfs_v2.ClearCacheRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ClearCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.Commit', null, global);
goog.exportSymbol('proto.pfs_v2.CommitInfo', null, global);
goog.exportSymbol('proto.pfs_v2.CommitInfo.Details', null, global);
goog.exportSymbol('proto.pfs_v2.CommitOrigin', null, global);
goog.exportSymbol('proto.pfs_v2.CommitPicker', null, global);
goog.exportSymbol('proto.pfs_v2.CommitPicker.AncestorOf', null, global);
goog.exportSymbol('proto.pfs_v2.CommitPicker.BranchRoot', null, global);
goog.exportSymbol('proto.pfs_v2.CommitPicker.CommitByGlobalId', null, global);
goog.exportSymbol('proto.pfs_v2.CommitPicker.PickerCase', null, global);
goog.exportSymbol('proto.pfs_v2.CommitSet', null, global);
goog.exportSymbol('proto.pfs_v2.CommitSetInfo', null, global);
goog.exportSymbol('proto.pfs_v2.CommitState', null, global);
goog.exportSymbol('proto.pfs_v2.ComposeFileSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.CopyFile', null, global);
goog.exportSymbol('proto.pfs_v2.CreateBranchRequest', null, global);
goog.exportSymbol('proto.pfs_v2.CreateFileSetResponse', null, global);
goog.exportSymbol('proto.pfs_v2.CreateProjectRequest', null, global);
goog.exportSymbol('proto.pfs_v2.CreateRepoRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteBranchRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteFile', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteProjectRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteRepoRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteRepoResponse', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteReposRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DeleteReposResponse', null, global);
goog.exportSymbol('proto.pfs_v2.Delimiter', null, global);
goog.exportSymbol('proto.pfs_v2.DiffFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DiffFileResponse', null, global);
goog.exportSymbol('proto.pfs_v2.DropCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.DropCommitResponse', null, global);
goog.exportSymbol('proto.pfs_v2.DropCommitSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.EgressRequest', null, global);
goog.exportSymbol('proto.pfs_v2.EgressRequest.TargetCase', null, global);
goog.exportSymbol('proto.pfs_v2.EgressResponse', null, global);
goog.exportSymbol('proto.pfs_v2.EgressResponse.ObjectStorageResult', null, global);
goog.exportSymbol('proto.pfs_v2.EgressResponse.ResultCase', null, global);
goog.exportSymbol('proto.pfs_v2.EgressResponse.SQLDatabaseResult', null, global);
goog.exportSymbol('proto.pfs_v2.File', null, global);
goog.exportSymbol('proto.pfs_v2.FileInfo', null, global);
goog.exportSymbol('proto.pfs_v2.FileType', null, global);
goog.exportSymbol('proto.pfs_v2.FindCommitsRequest', null, global);
goog.exportSymbol('proto.pfs_v2.FindCommitsResponse', null, global);
goog.exportSymbol('proto.pfs_v2.FindCommitsResponse.ResultCase', null, global);
goog.exportSymbol('proto.pfs_v2.FinishCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.FsckRequest', null, global);
goog.exportSymbol('proto.pfs_v2.FsckRequest.ZombieCheckCase', null, global);
goog.exportSymbol('proto.pfs_v2.FsckResponse', null, global);
goog.exportSymbol('proto.pfs_v2.GetCacheRequest', null, global);
goog.exportSymbol('proto.pfs_v2.GetCacheResponse', null, global);
goog.exportSymbol('proto.pfs_v2.GetFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.GetFileSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.GetFileSetRequest.FileSetType', null, global);
goog.exportSymbol('proto.pfs_v2.GlobFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectBranchRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectCommitSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectProjectRequest', null, global);
goog.exportSymbol('proto.pfs_v2.InspectProjectV2Request', null, global);
goog.exportSymbol('proto.pfs_v2.InspectProjectV2Response', null, global);
goog.exportSymbol('proto.pfs_v2.InspectRepoRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListBranchRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListCommitSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListProjectRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ListRepoRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ModifyFileRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ModifyFileRequest.BodyCase', null, global);
goog.exportSymbol('proto.pfs_v2.ObjectStorageEgress', null, global);
goog.exportSymbol('proto.pfs_v2.OriginKind', null, global);
goog.exportSymbol('proto.pfs_v2.PathRange', null, global);
goog.exportSymbol('proto.pfs_v2.Project', null, global);
goog.exportSymbol('proto.pfs_v2.ProjectInfo', null, global);
goog.exportSymbol('proto.pfs_v2.ProjectPicker', null, global);
goog.exportSymbol('proto.pfs_v2.ProjectPicker.PickerCase', null, global);
goog.exportSymbol('proto.pfs_v2.PutCacheRequest', null, global);
goog.exportSymbol('proto.pfs_v2.RenewFileSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.Repo', null, global);
goog.exportSymbol('proto.pfs_v2.RepoInfo', null, global);
goog.exportSymbol('proto.pfs_v2.RepoInfo.Details', null, global);
goog.exportSymbol('proto.pfs_v2.RepoPage', null, global);
goog.exportSymbol('proto.pfs_v2.RepoPage.Ordering', null, global);
goog.exportSymbol('proto.pfs_v2.RepoPicker', null, global);
goog.exportSymbol('proto.pfs_v2.RepoPicker.PickerCase', null, global);
goog.exportSymbol('proto.pfs_v2.RepoPicker.RepoName', null, global);
goog.exportSymbol('proto.pfs_v2.ReposSummary', null, global);
goog.exportSymbol('proto.pfs_v2.ReposSummaryRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ReposSummaryResponse', null, global);
goog.exportSymbol('proto.pfs_v2.SQLDatabaseEgress', null, global);
goog.exportSymbol('proto.pfs_v2.SQLDatabaseEgress.FileFormat', null, global);
goog.exportSymbol('proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type', null, global);
goog.exportSymbol('proto.pfs_v2.SQLDatabaseEgress.Secret', null, global);
goog.exportSymbol('proto.pfs_v2.ShardFileSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.ShardFileSetResponse', null, global);
goog.exportSymbol('proto.pfs_v2.SquashCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.SquashCommitResponse', null, global);
goog.exportSymbol('proto.pfs_v2.SquashCommitSetRequest', null, global);
goog.exportSymbol('proto.pfs_v2.StartCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.SubscribeCommitRequest', null, global);
goog.exportSymbol('proto.pfs_v2.Trigger', null, global);
goog.exportSymbol('proto.pfs_v2.WalkBranchProvenanceRequest', null, global);
goog.exportSymbol('proto.pfs_v2.WalkBranchSubvenanceRequest', null, global);
goog.exportSymbol('proto.pfs_v2.WalkCommitProvenanceRequest', null, global);
goog.exportSymbol('proto.pfs_v2.WalkCommitSubvenanceRequest', null, global);
goog.exportSymbol('proto.pfs_v2.WalkFileRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.Repo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.Repo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.Repo.displayName = 'proto.pfs_v2.Repo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RepoPicker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.RepoPicker.oneofGroups_);
};
goog.inherits(proto.pfs_v2.RepoPicker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RepoPicker.displayName = 'proto.pfs_v2.RepoPicker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RepoPicker.RepoName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.RepoPicker.RepoName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RepoPicker.RepoName.displayName = 'proto.pfs_v2.RepoPicker.RepoName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.Branch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.Branch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.Branch.displayName = 'proto.pfs_v2.Branch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.BranchPicker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.BranchPicker.oneofGroups_);
};
goog.inherits(proto.pfs_v2.BranchPicker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.BranchPicker.displayName = 'proto.pfs_v2.BranchPicker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.BranchPicker.BranchName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.BranchPicker.BranchName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.BranchPicker.BranchName.displayName = 'proto.pfs_v2.BranchPicker.BranchName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.File.displayName = 'proto.pfs_v2.File';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RepoInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.RepoInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.RepoInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RepoInfo.displayName = 'proto.pfs_v2.RepoInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RepoInfo.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.RepoInfo.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RepoInfo.Details.displayName = 'proto.pfs_v2.RepoInfo.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.AuthInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.AuthInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.AuthInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.AuthInfo.displayName = 'proto.pfs_v2.AuthInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.BranchInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.BranchInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.BranchInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.BranchInfo.displayName = 'proto.pfs_v2.BranchInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.Trigger.displayName = 'proto.pfs_v2.Trigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitOrigin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitOrigin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitOrigin.displayName = 'proto.pfs_v2.CommitOrigin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.Commit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.Commit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.Commit.displayName = 'proto.pfs_v2.Commit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitPicker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.CommitPicker.oneofGroups_);
};
goog.inherits(proto.pfs_v2.CommitPicker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitPicker.displayName = 'proto.pfs_v2.CommitPicker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitPicker.CommitByGlobalId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitPicker.CommitByGlobalId.displayName = 'proto.pfs_v2.CommitPicker.CommitByGlobalId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitPicker.BranchRoot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitPicker.BranchRoot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitPicker.BranchRoot.displayName = 'proto.pfs_v2.CommitPicker.BranchRoot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitPicker.AncestorOf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitPicker.AncestorOf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitPicker.AncestorOf.displayName = 'proto.pfs_v2.CommitPicker.AncestorOf';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.CommitInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.CommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitInfo.displayName = 'proto.pfs_v2.CommitInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitInfo.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitInfo.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitInfo.Details.displayName = 'proto.pfs_v2.CommitInfo.Details';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CommitSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitSet.displayName = 'proto.pfs_v2.CommitSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CommitSetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.CommitSetInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.CommitSetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CommitSetInfo.displayName = 'proto.pfs_v2.CommitSetInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FileInfo.displayName = 'proto.pfs_v2.FileInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.Project.displayName = 'proto.pfs_v2.Project';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ProjectInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ProjectInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ProjectInfo.displayName = 'proto.pfs_v2.ProjectInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ProjectPicker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.ProjectPicker.oneofGroups_);
};
goog.inherits(proto.pfs_v2.ProjectPicker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ProjectPicker.displayName = 'proto.pfs_v2.ProjectPicker';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CreateRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CreateRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CreateRepoRequest.displayName = 'proto.pfs_v2.CreateRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectRepoRequest.displayName = 'proto.pfs_v2.InspectRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.ListRepoRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.ListRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListRepoRequest.displayName = 'proto.pfs_v2.ListRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RepoPage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.RepoPage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RepoPage.displayName = 'proto.pfs_v2.RepoPage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DeleteRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteRepoRequest.displayName = 'proto.pfs_v2.DeleteRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteReposRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.DeleteReposRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.DeleteReposRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteReposRequest.displayName = 'proto.pfs_v2.DeleteReposRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DeleteRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteRepoResponse.displayName = 'proto.pfs_v2.DeleteRepoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteReposResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.DeleteReposResponse.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.DeleteReposResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteReposResponse.displayName = 'proto.pfs_v2.DeleteReposResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.StartCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.StartCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.StartCommitRequest.displayName = 'proto.pfs_v2.StartCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FinishCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.FinishCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FinishCommitRequest.displayName = 'proto.pfs_v2.FinishCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectCommitRequest.displayName = 'proto.pfs_v2.InspectCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ListCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListCommitRequest.displayName = 'proto.pfs_v2.ListCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectCommitSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectCommitSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectCommitSetRequest.displayName = 'proto.pfs_v2.InspectCommitSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListCommitSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ListCommitSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListCommitSetRequest.displayName = 'proto.pfs_v2.ListCommitSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SquashCommitSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SquashCommitSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SquashCommitSetRequest.displayName = 'proto.pfs_v2.SquashCommitSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DropCommitSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DropCommitSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DropCommitSetRequest.displayName = 'proto.pfs_v2.DropCommitSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SubscribeCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SubscribeCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SubscribeCommitRequest.displayName = 'proto.pfs_v2.SubscribeCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ClearCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ClearCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ClearCommitRequest.displayName = 'proto.pfs_v2.ClearCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SquashCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SquashCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SquashCommitRequest.displayName = 'proto.pfs_v2.SquashCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SquashCommitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SquashCommitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SquashCommitResponse.displayName = 'proto.pfs_v2.SquashCommitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DropCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DropCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DropCommitRequest.displayName = 'proto.pfs_v2.DropCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.WalkCommitProvenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.WalkCommitProvenanceRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.WalkCommitProvenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.WalkCommitProvenanceRequest.displayName = 'proto.pfs_v2.WalkCommitProvenanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.WalkCommitSubvenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.WalkCommitSubvenanceRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.WalkCommitSubvenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.WalkCommitSubvenanceRequest.displayName = 'proto.pfs_v2.WalkCommitSubvenanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.WalkBranchProvenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.WalkBranchProvenanceRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.WalkBranchProvenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.WalkBranchProvenanceRequest.displayName = 'proto.pfs_v2.WalkBranchProvenanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.WalkBranchSubvenanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.WalkBranchSubvenanceRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.WalkBranchSubvenanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.WalkBranchSubvenanceRequest.displayName = 'proto.pfs_v2.WalkBranchSubvenanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DropCommitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DropCommitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DropCommitResponse.displayName = 'proto.pfs_v2.DropCommitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CreateBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.CreateBranchRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.CreateBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CreateBranchRequest.displayName = 'proto.pfs_v2.CreateBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FindCommitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.FindCommitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FindCommitsRequest.displayName = 'proto.pfs_v2.FindCommitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FindCommitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.FindCommitsResponse.oneofGroups_);
};
goog.inherits(proto.pfs_v2.FindCommitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FindCommitsResponse.displayName = 'proto.pfs_v2.FindCommitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectBranchRequest.displayName = 'proto.pfs_v2.InspectBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ListBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListBranchRequest.displayName = 'proto.pfs_v2.ListBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DeleteBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteBranchRequest.displayName = 'proto.pfs_v2.DeleteBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CreateProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CreateProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CreateProjectRequest.displayName = 'proto.pfs_v2.CreateProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectProjectRequest.displayName = 'proto.pfs_v2.InspectProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectProjectV2Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectProjectV2Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectProjectV2Request.displayName = 'proto.pfs_v2.InspectProjectV2Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectProjectV2Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectProjectV2Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectProjectV2Response.displayName = 'proto.pfs_v2.InspectProjectV2Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ListProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListProjectRequest.displayName = 'proto.pfs_v2.ListProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DeleteProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteProjectRequest.displayName = 'proto.pfs_v2.DeleteProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.AddFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.AddFile.oneofGroups_);
};
goog.inherits(proto.pfs_v2.AddFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.AddFile.displayName = 'proto.pfs_v2.AddFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.AddFile.URLSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.AddFile.URLSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.AddFile.URLSource.displayName = 'proto.pfs_v2.AddFile.URLSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DeleteFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DeleteFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DeleteFile.displayName = 'proto.pfs_v2.DeleteFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CopyFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CopyFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CopyFile.displayName = 'proto.pfs_v2.CopyFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ModifyFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.ModifyFileRequest.oneofGroups_);
};
goog.inherits(proto.pfs_v2.ModifyFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ModifyFileRequest.displayName = 'proto.pfs_v2.ModifyFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.GetFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.GetFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.GetFileRequest.displayName = 'proto.pfs_v2.GetFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.InspectFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.InspectFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.InspectFileRequest.displayName = 'proto.pfs_v2.InspectFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ListFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ListFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ListFileRequest.displayName = 'proto.pfs_v2.ListFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.WalkFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.WalkFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.WalkFileRequest.displayName = 'proto.pfs_v2.WalkFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.GlobFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.GlobFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.GlobFileRequest.displayName = 'proto.pfs_v2.GlobFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DiffFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DiffFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DiffFileRequest.displayName = 'proto.pfs_v2.DiffFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.DiffFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.DiffFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.DiffFileResponse.displayName = 'proto.pfs_v2.DiffFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FsckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.FsckRequest.oneofGroups_);
};
goog.inherits(proto.pfs_v2.FsckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FsckRequest.displayName = 'proto.pfs_v2.FsckRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.FsckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.FsckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.FsckResponse.displayName = 'proto.pfs_v2.FsckResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CreateFileSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CreateFileSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CreateFileSetResponse.displayName = 'proto.pfs_v2.CreateFileSetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.GetFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.GetFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.GetFileSetRequest.displayName = 'proto.pfs_v2.GetFileSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.AddFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.AddFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.AddFileSetRequest.displayName = 'proto.pfs_v2.AddFileSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.RenewFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.RenewFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.RenewFileSetRequest.displayName = 'proto.pfs_v2.RenewFileSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ComposeFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.ComposeFileSetRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.ComposeFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ComposeFileSetRequest.displayName = 'proto.pfs_v2.ComposeFileSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ShardFileSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ShardFileSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ShardFileSetRequest.displayName = 'proto.pfs_v2.ShardFileSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.PathRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.PathRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.PathRange.displayName = 'proto.pfs_v2.PathRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ShardFileSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.ShardFileSetResponse.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.ShardFileSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ShardFileSetResponse.displayName = 'proto.pfs_v2.ShardFileSetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CheckStorageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CheckStorageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CheckStorageRequest.displayName = 'proto.pfs_v2.CheckStorageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.CheckStorageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.CheckStorageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.CheckStorageResponse.displayName = 'proto.pfs_v2.CheckStorageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.PutCacheRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.PutCacheRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.PutCacheRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.PutCacheRequest.displayName = 'proto.pfs_v2.PutCacheRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.GetCacheRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.GetCacheRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.GetCacheRequest.displayName = 'proto.pfs_v2.GetCacheRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.GetCacheResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.GetCacheResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.GetCacheResponse.displayName = 'proto.pfs_v2.GetCacheResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ClearCacheRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ClearCacheRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ClearCacheRequest.displayName = 'proto.pfs_v2.ClearCacheRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ActivateAuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ActivateAuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ActivateAuthRequest.displayName = 'proto.pfs_v2.ActivateAuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ActivateAuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ActivateAuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ActivateAuthResponse.displayName = 'proto.pfs_v2.ActivateAuthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ObjectStorageEgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ObjectStorageEgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ObjectStorageEgress.displayName = 'proto.pfs_v2.ObjectStorageEgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SQLDatabaseEgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SQLDatabaseEgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SQLDatabaseEgress.displayName = 'proto.pfs_v2.SQLDatabaseEgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.SQLDatabaseEgress.FileFormat.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.SQLDatabaseEgress.FileFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SQLDatabaseEgress.FileFormat.displayName = 'proto.pfs_v2.SQLDatabaseEgress.FileFormat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.SQLDatabaseEgress.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.SQLDatabaseEgress.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.SQLDatabaseEgress.Secret.displayName = 'proto.pfs_v2.SQLDatabaseEgress.Secret';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.EgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.EgressRequest.oneofGroups_);
};
goog.inherits(proto.pfs_v2.EgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.EgressRequest.displayName = 'proto.pfs_v2.EgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.EgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs_v2.EgressResponse.oneofGroups_);
};
goog.inherits(proto.pfs_v2.EgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.EgressResponse.displayName = 'proto.pfs_v2.EgressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.EgressResponse.ObjectStorageResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.EgressResponse.ObjectStorageResult.displayName = 'proto.pfs_v2.EgressResponse.ObjectStorageResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.EgressResponse.SQLDatabaseResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.EgressResponse.SQLDatabaseResult.displayName = 'proto.pfs_v2.EgressResponse.SQLDatabaseResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ReposSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.ReposSummaryRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.ReposSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ReposSummaryRequest.displayName = 'proto.pfs_v2.ReposSummaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ReposSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs_v2.ReposSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ReposSummary.displayName = 'proto.pfs_v2.ReposSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs_v2.ReposSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs_v2.ReposSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.pfs_v2.ReposSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs_v2.ReposSummaryResponse.displayName = 'proto.pfs_v2.ReposSummaryResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.Repo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.Repo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.Repo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Repo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.Repo}
 */
proto.pfs_v2.Repo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.Repo;
  return proto.pfs_v2.Repo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.Repo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.Repo}
 */
proto.pfs_v2.Repo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.Repo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.Repo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.Repo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Repo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pfs_v2.Repo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Repo} returns this
 */
proto.pfs_v2.Repo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.pfs_v2.Repo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Repo} returns this
 */
proto.pfs_v2.Repo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Project project = 3;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.Repo.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 3));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.Repo} returns this
*/
proto.pfs_v2.Repo.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.Repo} returns this
 */
proto.pfs_v2.Repo.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.Repo.prototype.hasProject = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.RepoPicker.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.pfs_v2.RepoPicker.PickerCase = {
  PICKER_NOT_SET: 0,
  NAME: 1
};

/**
 * @return {proto.pfs_v2.RepoPicker.PickerCase}
 */
proto.pfs_v2.RepoPicker.prototype.getPickerCase = function() {
  return /** @type {proto.pfs_v2.RepoPicker.PickerCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.RepoPicker.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RepoPicker.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RepoPicker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RepoPicker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPicker.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && proto.pfs_v2.RepoPicker.RepoName.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RepoPicker}
 */
proto.pfs_v2.RepoPicker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RepoPicker;
  return proto.pfs_v2.RepoPicker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RepoPicker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RepoPicker}
 */
proto.pfs_v2.RepoPicker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.RepoPicker.RepoName;
      reader.readMessage(value,proto.pfs_v2.RepoPicker.RepoName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RepoPicker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RepoPicker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RepoPicker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPicker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.RepoPicker.RepoName.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RepoPicker.RepoName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RepoPicker.RepoName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPicker.RepoName.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.ProjectPicker.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RepoPicker.RepoName}
 */
proto.pfs_v2.RepoPicker.RepoName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RepoPicker.RepoName;
  return proto.pfs_v2.RepoPicker.RepoName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RepoPicker.RepoName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RepoPicker.RepoName}
 */
proto.pfs_v2.RepoPicker.RepoName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.ProjectPicker;
      reader.readMessage(value,proto.pfs_v2.ProjectPicker.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RepoPicker.RepoName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RepoPicker.RepoName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPicker.RepoName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.ProjectPicker.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProjectPicker project = 1;
 * @return {?proto.pfs_v2.ProjectPicker}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.ProjectPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.ProjectPicker, 1));
};


/**
 * @param {?proto.pfs_v2.ProjectPicker|undefined} value
 * @return {!proto.pfs_v2.RepoPicker.RepoName} returns this
*/
proto.pfs_v2.RepoPicker.RepoName.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoPicker.RepoName} returns this
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.RepoPicker.RepoName} returns this
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.RepoPicker.RepoName} returns this
 */
proto.pfs_v2.RepoPicker.RepoName.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RepoName name = 1;
 * @return {?proto.pfs_v2.RepoPicker.RepoName}
 */
proto.pfs_v2.RepoPicker.prototype.getName = function() {
  return /** @type{?proto.pfs_v2.RepoPicker.RepoName} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.RepoPicker.RepoName, 1));
};


/**
 * @param {?proto.pfs_v2.RepoPicker.RepoName|undefined} value
 * @return {!proto.pfs_v2.RepoPicker} returns this
*/
proto.pfs_v2.RepoPicker.prototype.setName = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.RepoPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoPicker} returns this
 */
proto.pfs_v2.RepoPicker.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoPicker.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.Branch.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.Branch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.Branch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Branch.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.Branch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.Branch;
  return proto.pfs_v2.Branch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.Branch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.Branch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.Branch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.Branch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.Branch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Branch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.Branch.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.Branch} returns this
*/
proto.pfs_v2.Branch.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.Branch} returns this
 */
proto.pfs_v2.Branch.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.Branch.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pfs_v2.Branch.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Branch} returns this
 */
proto.pfs_v2.Branch.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.BranchPicker.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.pfs_v2.BranchPicker.PickerCase = {
  PICKER_NOT_SET: 0,
  NAME: 1
};

/**
 * @return {proto.pfs_v2.BranchPicker.PickerCase}
 */
proto.pfs_v2.BranchPicker.prototype.getPickerCase = function() {
  return /** @type {proto.pfs_v2.BranchPicker.PickerCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.BranchPicker.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.BranchPicker.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.BranchPicker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.BranchPicker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchPicker.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = msg.getName()) && proto.pfs_v2.BranchPicker.BranchName.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.BranchPicker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.BranchPicker;
  return proto.pfs_v2.BranchPicker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.BranchPicker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.BranchPicker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.BranchPicker.BranchName;
      reader.readMessage(value,proto.pfs_v2.BranchPicker.BranchName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.BranchPicker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.BranchPicker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.BranchPicker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchPicker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.BranchPicker.BranchName.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.BranchPicker.BranchName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.BranchPicker.BranchName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchPicker.BranchName.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.RepoPicker.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.BranchPicker.BranchName}
 */
proto.pfs_v2.BranchPicker.BranchName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.BranchPicker.BranchName;
  return proto.pfs_v2.BranchPicker.BranchName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.BranchPicker.BranchName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.BranchPicker.BranchName}
 */
proto.pfs_v2.BranchPicker.BranchName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.RepoPicker;
      reader.readMessage(value,proto.pfs_v2.RepoPicker.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.BranchPicker.BranchName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.BranchPicker.BranchName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchPicker.BranchName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.RepoPicker.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RepoPicker repo = 1;
 * @return {?proto.pfs_v2.RepoPicker}
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.RepoPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.RepoPicker, 1));
};


/**
 * @param {?proto.pfs_v2.RepoPicker|undefined} value
 * @return {!proto.pfs_v2.BranchPicker.BranchName} returns this
*/
proto.pfs_v2.BranchPicker.BranchName.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.BranchPicker.BranchName} returns this
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.BranchPicker.BranchName} returns this
 */
proto.pfs_v2.BranchPicker.BranchName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BranchName name = 1;
 * @return {?proto.pfs_v2.BranchPicker.BranchName}
 */
proto.pfs_v2.BranchPicker.prototype.getName = function() {
  return /** @type{?proto.pfs_v2.BranchPicker.BranchName} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.BranchPicker.BranchName, 1));
};


/**
 * @param {?proto.pfs_v2.BranchPicker.BranchName|undefined} value
 * @return {!proto.pfs_v2.BranchPicker} returns this
*/
proto.pfs_v2.BranchPicker.prototype.setName = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.BranchPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.BranchPicker} returns this
 */
proto.pfs_v2.BranchPicker.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.BranchPicker.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.File.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    datum: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.File}
 */
proto.pfs_v2.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.File;
  return proto.pfs_v2.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.File}
 */
proto.pfs_v2.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatum();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.File.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.File} returns this
*/
proto.pfs_v2.File.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.File} returns this
 */
proto.pfs_v2.File.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.File.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.pfs_v2.File.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.File} returns this
 */
proto.pfs_v2.File.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string datum = 3;
 * @return {string}
 */
proto.pfs_v2.File.prototype.getDatum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.File} returns this
 */
proto.pfs_v2.File.prototype.setDatum = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.RepoInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RepoInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RepoInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RepoInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sizeBytesUpperBound: jspb.Message.getFieldWithDefault(msg, 3, 0),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    branchesList: jspb.Message.toObjectList(msg.getBranchesList(),
    proto.pfs_v2.Branch.toObject, includeInstance),
    authInfo: (f = msg.getAuthInfo()) && proto.pfs_v2.AuthInfo.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && proto.pfs_v2.RepoInfo.Details.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RepoInfo}
 */
proto.pfs_v2.RepoInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RepoInfo;
  return proto.pfs_v2.RepoInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RepoInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RepoInfo}
 */
proto.pfs_v2.RepoInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytesUpperBound(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.addBranches(value);
      break;
    case 6:
      var value = new proto.pfs_v2.AuthInfo;
      reader.readMessage(value,proto.pfs_v2.AuthInfo.deserializeBinaryFromReader);
      msg.setAuthInfo(value);
      break;
    case 7:
      var value = new proto.pfs_v2.RepoInfo.Details;
      reader.readMessage(value,proto.pfs_v2.RepoInfo.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 8:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RepoInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RepoInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RepoInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSizeBytesUpperBound();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBranchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getAuthInfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pfs_v2.AuthInfo.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.pfs_v2.RepoInfo.Details.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RepoInfo.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RepoInfo.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RepoInfo.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoInfo.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RepoInfo.Details}
 */
proto.pfs_v2.RepoInfo.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RepoInfo.Details;
  return proto.pfs_v2.RepoInfo.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RepoInfo.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RepoInfo.Details}
 */
proto.pfs_v2.RepoInfo.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RepoInfo.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RepoInfo.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RepoInfo.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoInfo.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 size_bytes = 1;
 * @return {number}
 */
proto.pfs_v2.RepoInfo.Details.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.RepoInfo.Details} returns this
 */
proto.pfs_v2.RepoInfo.Details.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.RepoInfo.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
*/
proto.pfs_v2.RepoInfo.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoInfo.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.RepoInfo.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
*/
proto.pfs_v2.RepoInfo.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoInfo.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 size_bytes_upper_bound = 3;
 * @return {number}
 */
proto.pfs_v2.RepoInfo.prototype.getSizeBytesUpperBound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.setSizeBytesUpperBound = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.pfs_v2.RepoInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Branch branches = 5;
 * @return {!Array<!proto.pfs_v2.Branch>}
 */
proto.pfs_v2.RepoInfo.prototype.getBranchesList = function() {
  return /** @type{!Array<!proto.pfs_v2.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Branch, 5));
};


/**
 * @param {!Array<!proto.pfs_v2.Branch>} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
*/
proto.pfs_v2.RepoInfo.prototype.setBranchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs_v2.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.RepoInfo.prototype.addBranches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs_v2.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearBranchesList = function() {
  return this.setBranchesList([]);
};


/**
 * optional AuthInfo auth_info = 6;
 * @return {?proto.pfs_v2.AuthInfo}
 */
proto.pfs_v2.RepoInfo.prototype.getAuthInfo = function() {
  return /** @type{?proto.pfs_v2.AuthInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.AuthInfo, 6));
};


/**
 * @param {?proto.pfs_v2.AuthInfo|undefined} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
*/
proto.pfs_v2.RepoInfo.prototype.setAuthInfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearAuthInfo = function() {
  return this.setAuthInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoInfo.prototype.hasAuthInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Details details = 7;
 * @return {?proto.pfs_v2.RepoInfo.Details}
 */
proto.pfs_v2.RepoInfo.prototype.getDetails = function() {
  return /** @type{?proto.pfs_v2.RepoInfo.Details} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.RepoInfo.Details, 7));
};


/**
 * @param {?proto.pfs_v2.RepoInfo.Details|undefined} value
 * @return {!proto.pfs_v2.RepoInfo} returns this
*/
proto.pfs_v2.RepoInfo.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.RepoInfo.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * map<string, string> metadata = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pfs_v2.RepoInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pfs_v2.RepoInfo} returns this
 */
proto.pfs_v2.RepoInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.AuthInfo.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.AuthInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.AuthInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.AuthInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AuthInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    rolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.AuthInfo}
 */
proto.pfs_v2.AuthInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.AuthInfo;
  return proto.pfs_v2.AuthInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.AuthInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.AuthInfo}
 */
proto.pfs_v2.AuthInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.auth_v2.Permission>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissions(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.AuthInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.AuthInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.AuthInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AuthInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated auth_v2.Permission permissions = 1;
 * @return {!Array<!proto.auth_v2.Permission>}
 */
proto.pfs_v2.AuthInfo.prototype.getPermissionsList = function() {
  return /** @type {!Array<!proto.auth_v2.Permission>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.auth_v2.Permission>} value
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.auth_v2.Permission} value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * repeated string roles = 2;
 * @return {!Array<string>}
 */
proto.pfs_v2.AuthInfo.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.AuthInfo} returns this
 */
proto.pfs_v2.AuthInfo.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.BranchInfo.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.BranchInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.BranchInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.BranchInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f),
    head: (f = msg.getHead()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs_v2.Branch.toObject, includeInstance),
    subvenanceList: jspb.Message.toObjectList(msg.getSubvenanceList(),
    proto.pfs_v2.Branch.toObject, includeInstance),
    directProvenanceList: jspb.Message.toObjectList(msg.getDirectProvenanceList(),
    proto.pfs_v2.Branch.toObject, includeInstance),
    trigger: (f = msg.getTrigger()) && proto.pfs_v2.Trigger.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.BranchInfo}
 */
proto.pfs_v2.BranchInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.BranchInfo;
  return proto.pfs_v2.BranchInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.BranchInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.BranchInfo}
 */
proto.pfs_v2.BranchInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    case 4:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.addSubvenance(value);
      break;
    case 5:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.addDirectProvenance(value);
      break;
    case 6:
      var value = new proto.pfs_v2.Trigger;
      reader.readMessage(value,proto.pfs_v2.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 7:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.BranchInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.BranchInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.BranchInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.BranchInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getSubvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getDirectProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pfs_v2.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.BranchInfo.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 1));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.BranchInfo.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit head = 2;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.BranchInfo.prototype.getHead = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 2));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setHead = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearHead = function() {
  return this.setHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.BranchInfo.prototype.hasHead = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Branch provenance = 3;
 * @return {!Array<!proto.pfs_v2.Branch>}
 */
proto.pfs_v2.BranchInfo.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Branch, 3));
};


/**
 * @param {!Array<!proto.pfs_v2.Branch>} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs_v2.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.BranchInfo.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs_v2.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};


/**
 * repeated Branch subvenance = 4;
 * @return {!Array<!proto.pfs_v2.Branch>}
 */
proto.pfs_v2.BranchInfo.prototype.getSubvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Branch, 4));
};


/**
 * @param {!Array<!proto.pfs_v2.Branch>} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setSubvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pfs_v2.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.BranchInfo.prototype.addSubvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pfs_v2.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearSubvenanceList = function() {
  return this.setSubvenanceList([]);
};


/**
 * repeated Branch direct_provenance = 5;
 * @return {!Array<!proto.pfs_v2.Branch>}
 */
proto.pfs_v2.BranchInfo.prototype.getDirectProvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Branch, 5));
};


/**
 * @param {!Array<!proto.pfs_v2.Branch>} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setDirectProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs_v2.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.BranchInfo.prototype.addDirectProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs_v2.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearDirectProvenanceList = function() {
  return this.setDirectProvenanceList([]);
};


/**
 * optional Trigger trigger = 6;
 * @return {?proto.pfs_v2.Trigger}
 */
proto.pfs_v2.BranchInfo.prototype.getTrigger = function() {
  return /** @type{?proto.pfs_v2.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Trigger, 6));
};


/**
 * @param {?proto.pfs_v2.Trigger|undefined} value
 * @return {!proto.pfs_v2.BranchInfo} returns this
*/
proto.pfs_v2.BranchInfo.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.BranchInfo.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, string> metadata = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pfs_v2.BranchInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pfs_v2.BranchInfo} returns this
 */
proto.pfs_v2.BranchInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: jspb.Message.getFieldWithDefault(msg, 1, ""),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    rateLimitSpec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commits: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cronSpec: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.Trigger}
 */
proto.pfs_v2.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.Trigger;
  return proto.pfs_v2.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.Trigger}
 */
proto.pfs_v2.Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateLimitSpec(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommits(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRateLimitSpec();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommits();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCronSpec();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string branch = 1;
 * @return {string}
 */
proto.pfs_v2.Trigger.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool all = 2;
 * @return {boolean}
 */
proto.pfs_v2.Trigger.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string rate_limit_spec = 3;
 * @return {string}
 */
proto.pfs_v2.Trigger.prototype.getRateLimitSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setRateLimitSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string size = 4;
 * @return {string}
 */
proto.pfs_v2.Trigger.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 commits = 5;
 * @return {number}
 */
proto.pfs_v2.Trigger.prototype.getCommits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setCommits = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cron_spec = 6;
 * @return {string}
 */
proto.pfs_v2.Trigger.prototype.getCronSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Trigger} returns this
 */
proto.pfs_v2.Trigger.prototype.setCronSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitOrigin.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitOrigin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitOrigin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitOrigin.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitOrigin}
 */
proto.pfs_v2.CommitOrigin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitOrigin;
  return proto.pfs_v2.CommitOrigin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitOrigin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitOrigin}
 */
proto.pfs_v2.CommitOrigin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pfs_v2.OriginKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitOrigin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitOrigin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitOrigin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitOrigin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OriginKind kind = 1;
 * @return {!proto.pfs_v2.OriginKind}
 */
proto.pfs_v2.CommitOrigin.prototype.getKind = function() {
  return /** @type {!proto.pfs_v2.OriginKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pfs_v2.OriginKind} value
 * @return {!proto.pfs_v2.CommitOrigin} returns this
 */
proto.pfs_v2.CommitOrigin.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.Commit.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.Commit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.Commit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Commit.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.Commit}
 */
proto.pfs_v2.Commit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.Commit;
  return proto.pfs_v2.Commit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.Commit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.Commit}
 */
proto.pfs_v2.Commit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 1:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.Commit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.Commit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.Commit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Commit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 3;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.Commit.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 3));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.Commit} returns this
*/
proto.pfs_v2.Commit.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.Commit} returns this
 */
proto.pfs_v2.Commit.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.Commit.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.pfs_v2.Commit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Commit} returns this
 */
proto.pfs_v2.Commit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.Commit.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 1));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.Commit} returns this
*/
proto.pfs_v2.Commit.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.Commit} returns this
 */
proto.pfs_v2.Commit.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.Commit.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.CommitPicker.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.pfs_v2.CommitPicker.PickerCase = {
  PICKER_NOT_SET: 0,
  BRANCH_HEAD: 1,
  ID: 2,
  ANCESTOR: 3,
  BRANCH_ROOT: 4
};

/**
 * @return {proto.pfs_v2.CommitPicker.PickerCase}
 */
proto.pfs_v2.CommitPicker.prototype.getPickerCase = function() {
  return /** @type {proto.pfs_v2.CommitPicker.PickerCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.CommitPicker.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitPicker.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitPicker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitPicker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchHead: (f = msg.getBranchHead()) && proto.pfs_v2.BranchPicker.toObject(includeInstance, f),
    id: (f = msg.getId()) && proto.pfs_v2.CommitPicker.CommitByGlobalId.toObject(includeInstance, f),
    ancestor: (f = msg.getAncestor()) && proto.pfs_v2.CommitPicker.AncestorOf.toObject(includeInstance, f),
    branchRoot: (f = msg.getBranchRoot()) && proto.pfs_v2.CommitPicker.BranchRoot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitPicker}
 */
proto.pfs_v2.CommitPicker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitPicker;
  return proto.pfs_v2.CommitPicker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitPicker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitPicker}
 */
proto.pfs_v2.CommitPicker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.BranchPicker;
      reader.readMessage(value,proto.pfs_v2.BranchPicker.deserializeBinaryFromReader);
      msg.setBranchHead(value);
      break;
    case 2:
      var value = new proto.pfs_v2.CommitPicker.CommitByGlobalId;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.CommitByGlobalId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new proto.pfs_v2.CommitPicker.AncestorOf;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.AncestorOf.deserializeBinaryFromReader);
      msg.setAncestor(value);
      break;
    case 4:
      var value = new proto.pfs_v2.CommitPicker.BranchRoot;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.BranchRoot.deserializeBinaryFromReader);
      msg.setBranchRoot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitPicker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitPicker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitPicker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchHead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.BranchPicker.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.CommitPicker.CommitByGlobalId.serializeBinaryToWriter
    );
  }
  f = message.getAncestor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.CommitPicker.AncestorOf.serializeBinaryToWriter
    );
  }
  f = message.getBranchRoot();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.CommitPicker.BranchRoot.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitPicker.CommitByGlobalId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitPicker.CommitByGlobalId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.RepoPicker.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitPicker.CommitByGlobalId}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitPicker.CommitByGlobalId;
  return proto.pfs_v2.CommitPicker.CommitByGlobalId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitPicker.CommitByGlobalId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitPicker.CommitByGlobalId}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.RepoPicker;
      reader.readMessage(value,proto.pfs_v2.RepoPicker.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitPicker.CommitByGlobalId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitPicker.CommitByGlobalId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.RepoPicker.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RepoPicker repo = 1;
 * @return {?proto.pfs_v2.RepoPicker}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.RepoPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.RepoPicker, 1));
};


/**
 * @param {?proto.pfs_v2.RepoPicker|undefined} value
 * @return {!proto.pfs_v2.CommitPicker.CommitByGlobalId} returns this
*/
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker.CommitByGlobalId} returns this
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CommitPicker.CommitByGlobalId} returns this
 */
proto.pfs_v2.CommitPicker.CommitByGlobalId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitPicker.BranchRoot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitPicker.BranchRoot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.BranchRoot.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    branch: (f = msg.getBranch()) && proto.pfs_v2.BranchPicker.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitPicker.BranchRoot}
 */
proto.pfs_v2.CommitPicker.BranchRoot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitPicker.BranchRoot;
  return proto.pfs_v2.CommitPicker.BranchRoot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitPicker.BranchRoot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitPicker.BranchRoot}
 */
proto.pfs_v2.CommitPicker.BranchRoot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 2:
      var value = new proto.pfs_v2.BranchPicker;
      reader.readMessage(value,proto.pfs_v2.BranchPicker.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitPicker.BranchRoot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitPicker.BranchRoot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.BranchRoot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.BranchPicker.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 offset = 1;
 * @return {number}
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.CommitPicker.BranchRoot} returns this
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional BranchPicker branch = 2;
 * @return {?proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.BranchPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.BranchPicker, 2));
};


/**
 * @param {?proto.pfs_v2.BranchPicker|undefined} value
 * @return {!proto.pfs_v2.CommitPicker.BranchRoot} returns this
*/
proto.pfs_v2.CommitPicker.BranchRoot.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker.BranchRoot} returns this
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.BranchRoot.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitPicker.AncestorOf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitPicker.AncestorOf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.AncestorOf.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    start: (f = msg.getStart()) && proto.pfs_v2.CommitPicker.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitPicker.AncestorOf}
 */
proto.pfs_v2.CommitPicker.AncestorOf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitPicker.AncestorOf;
  return proto.pfs_v2.CommitPicker.AncestorOf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitPicker.AncestorOf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitPicker.AncestorOf}
 */
proto.pfs_v2.CommitPicker.AncestorOf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 2:
      var value = new proto.pfs_v2.CommitPicker;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitPicker.AncestorOf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitPicker.AncestorOf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitPicker.AncestorOf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.CommitPicker.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 offset = 1;
 * @return {number}
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.CommitPicker.AncestorOf} returns this
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional CommitPicker start = 2;
 * @return {?proto.pfs_v2.CommitPicker}
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.getStart = function() {
  return /** @type{?proto.pfs_v2.CommitPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitPicker, 2));
};


/**
 * @param {?proto.pfs_v2.CommitPicker|undefined} value
 * @return {!proto.pfs_v2.CommitPicker.AncestorOf} returns this
*/
proto.pfs_v2.CommitPicker.AncestorOf.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker.AncestorOf} returns this
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.AncestorOf.prototype.hasStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BranchPicker branch_head = 1;
 * @return {?proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.CommitPicker.prototype.getBranchHead = function() {
  return /** @type{?proto.pfs_v2.BranchPicker} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.BranchPicker, 1));
};


/**
 * @param {?proto.pfs_v2.BranchPicker|undefined} value
 * @return {!proto.pfs_v2.CommitPicker} returns this
*/
proto.pfs_v2.CommitPicker.prototype.setBranchHead = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.CommitPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker} returns this
 */
proto.pfs_v2.CommitPicker.prototype.clearBranchHead = function() {
  return this.setBranchHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.prototype.hasBranchHead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitByGlobalId id = 2;
 * @return {?proto.pfs_v2.CommitPicker.CommitByGlobalId}
 */
proto.pfs_v2.CommitPicker.prototype.getId = function() {
  return /** @type{?proto.pfs_v2.CommitPicker.CommitByGlobalId} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitPicker.CommitByGlobalId, 2));
};


/**
 * @param {?proto.pfs_v2.CommitPicker.CommitByGlobalId|undefined} value
 * @return {!proto.pfs_v2.CommitPicker} returns this
*/
proto.pfs_v2.CommitPicker.prototype.setId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.CommitPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker} returns this
 */
proto.pfs_v2.CommitPicker.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AncestorOf ancestor = 3;
 * @return {?proto.pfs_v2.CommitPicker.AncestorOf}
 */
proto.pfs_v2.CommitPicker.prototype.getAncestor = function() {
  return /** @type{?proto.pfs_v2.CommitPicker.AncestorOf} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitPicker.AncestorOf, 3));
};


/**
 * @param {?proto.pfs_v2.CommitPicker.AncestorOf|undefined} value
 * @return {!proto.pfs_v2.CommitPicker} returns this
*/
proto.pfs_v2.CommitPicker.prototype.setAncestor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs_v2.CommitPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker} returns this
 */
proto.pfs_v2.CommitPicker.prototype.clearAncestor = function() {
  return this.setAncestor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.prototype.hasAncestor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BranchRoot branch_root = 4;
 * @return {?proto.pfs_v2.CommitPicker.BranchRoot}
 */
proto.pfs_v2.CommitPicker.prototype.getBranchRoot = function() {
  return /** @type{?proto.pfs_v2.CommitPicker.BranchRoot} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitPicker.BranchRoot, 4));
};


/**
 * @param {?proto.pfs_v2.CommitPicker.BranchRoot|undefined} value
 * @return {!proto.pfs_v2.CommitPicker} returns this
*/
proto.pfs_v2.CommitPicker.prototype.setBranchRoot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.pfs_v2.CommitPicker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitPicker} returns this
 */
proto.pfs_v2.CommitPicker.prototype.clearBranchRoot = function() {
  return this.setBranchRoot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitPicker.prototype.hasBranchRoot = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.CommitInfo.repeatedFields_ = [5,13,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    origin: (f = msg.getOrigin()) && proto.pfs_v2.CommitOrigin.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentCommit: (f = msg.getParentCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    childCommitsList: jspb.Message.toObjectList(msg.getChildCommitsList(),
    proto.pfs_v2.Commit.toObject, includeInstance),
    started: (f = msg.getStarted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finishing: (f = msg.getFinishing()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finished: (f = msg.getFinished()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    directProvenanceList: jspb.Message.toObjectList(msg.getDirectProvenanceList(),
    proto.pfs_v2.Commit.toObject, includeInstance),
    directSubvenanceList: jspb.Message.toObjectList(msg.getDirectSubvenanceList(),
    proto.pfs_v2.Commit.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 10, ""),
    sizeBytesUpperBound: jspb.Message.getFieldWithDefault(msg, 11, 0),
    details: (f = msg.getDetails()) && proto.pfs_v2.CommitInfo.Details.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitInfo}
 */
proto.pfs_v2.CommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitInfo;
  return proto.pfs_v2.CommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitInfo}
 */
proto.pfs_v2.CommitInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = new proto.pfs_v2.CommitOrigin;
      reader.readMessage(value,proto.pfs_v2.CommitOrigin.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setParentCommit(value);
      break;
    case 5:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.addChildCommits(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarted(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishing(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinished(value);
      break;
    case 13:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.addDirectProvenance(value);
      break;
    case 15:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.addDirectSubvenance(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytesUpperBound(value);
      break;
    case 12:
      var value = new proto.pfs_v2.CommitInfo.Details;
      reader.readMessage(value,proto.pfs_v2.CommitInfo.Details.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 14:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.CommitOrigin.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParentCommit();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getChildCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getStarted();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinishing();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDirectProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getDirectSubvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSizeBytesUpperBound();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.pfs_v2.CommitInfo.Details.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitInfo.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitInfo.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitInfo.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitInfo.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    compactingTime: (f = msg.getCompactingTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    validatingTime: (f = msg.getValidatingTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitInfo.Details}
 */
proto.pfs_v2.CommitInfo.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitInfo.Details;
  return proto.pfs_v2.CommitInfo.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitInfo.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitInfo.Details}
 */
proto.pfs_v2.CommitInfo.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setCompactingTime(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setValidatingTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitInfo.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitInfo.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitInfo.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitInfo.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCompactingTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getValidatingTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 size_bytes = 1;
 * @return {number}
 */
proto.pfs_v2.CommitInfo.Details.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.CommitInfo.Details} returns this
 */
proto.pfs_v2.CommitInfo.Details.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration compacting_time = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.pfs_v2.CommitInfo.Details.prototype.getCompactingTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.pfs_v2.CommitInfo.Details} returns this
*/
proto.pfs_v2.CommitInfo.Details.prototype.setCompactingTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo.Details} returns this
 */
proto.pfs_v2.CommitInfo.Details.prototype.clearCompactingTime = function() {
  return this.setCompactingTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.Details.prototype.hasCompactingTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration validating_time = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.pfs_v2.CommitInfo.Details.prototype.getValidatingTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.pfs_v2.CommitInfo.Details} returns this
*/
proto.pfs_v2.CommitInfo.Details.prototype.setValidatingTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo.Details} returns this
 */
proto.pfs_v2.CommitInfo.Details.prototype.clearValidatingTime = function() {
  return this.setValidatingTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.Details.prototype.hasValidatingTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.CommitInfo.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitOrigin origin = 2;
 * @return {?proto.pfs_v2.CommitOrigin}
 */
proto.pfs_v2.CommitInfo.prototype.getOrigin = function() {
  return /** @type{?proto.pfs_v2.CommitOrigin} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitOrigin, 2));
};


/**
 * @param {?proto.pfs_v2.CommitOrigin|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pfs_v2.CommitInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Commit parent_commit = 4;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.CommitInfo.prototype.getParentCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 4));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setParentCommit = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearParentCommit = function() {
  return this.setParentCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasParentCommit = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Commit child_commits = 5;
 * @return {!Array<!proto.pfs_v2.Commit>}
 */
proto.pfs_v2.CommitInfo.prototype.getChildCommitsList = function() {
  return /** @type{!Array<!proto.pfs_v2.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Commit, 5));
};


/**
 * @param {!Array<!proto.pfs_v2.Commit>} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setChildCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs_v2.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Commit}
 */
proto.pfs_v2.CommitInfo.prototype.addChildCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs_v2.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearChildCommitsList = function() {
  return this.setChildCommitsList([]);
};


/**
 * optional google.protobuf.Timestamp started = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.CommitInfo.prototype.getStarted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setStarted = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearStarted = function() {
  return this.setStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasStarted = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp finishing = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.CommitInfo.prototype.getFinishing = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setFinishing = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearFinishing = function() {
  return this.setFinishing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasFinishing = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp finished = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.CommitInfo.prototype.getFinished = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setFinished = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearFinished = function() {
  return this.setFinished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasFinished = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Commit direct_provenance = 13;
 * @return {!Array<!proto.pfs_v2.Commit>}
 */
proto.pfs_v2.CommitInfo.prototype.getDirectProvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Commit, 13));
};


/**
 * @param {!Array<!proto.pfs_v2.Commit>} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setDirectProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.pfs_v2.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Commit}
 */
proto.pfs_v2.CommitInfo.prototype.addDirectProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.pfs_v2.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearDirectProvenanceList = function() {
  return this.setDirectProvenanceList([]);
};


/**
 * repeated Commit direct_subvenance = 15;
 * @return {!Array<!proto.pfs_v2.Commit>}
 */
proto.pfs_v2.CommitInfo.prototype.getDirectSubvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Commit, 15));
};


/**
 * @param {!Array<!proto.pfs_v2.Commit>} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setDirectSubvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.pfs_v2.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Commit}
 */
proto.pfs_v2.CommitInfo.prototype.addDirectSubvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.pfs_v2.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearDirectSubvenanceList = function() {
  return this.setDirectSubvenanceList([]);
};


/**
 * optional string error = 10;
 * @return {string}
 */
proto.pfs_v2.CommitInfo.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 size_bytes_upper_bound = 11;
 * @return {number}
 */
proto.pfs_v2.CommitInfo.prototype.getSizeBytesUpperBound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.setSizeBytesUpperBound = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional Details details = 12;
 * @return {?proto.pfs_v2.CommitInfo.Details}
 */
proto.pfs_v2.CommitInfo.prototype.getDetails = function() {
  return /** @type{?proto.pfs_v2.CommitInfo.Details} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitInfo.Details, 12));
};


/**
 * @param {?proto.pfs_v2.CommitInfo.Details|undefined} value
 * @return {!proto.pfs_v2.CommitInfo} returns this
*/
proto.pfs_v2.CommitInfo.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitInfo.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * map<string, string> metadata = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pfs_v2.CommitInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pfs_v2.CommitInfo} returns this
 */
proto.pfs_v2.CommitInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitSet.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.CommitSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitSet;
  return proto.pfs_v2.CommitSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.CommitSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pfs_v2.CommitSet.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CommitSet} returns this
 */
proto.pfs_v2.CommitSet.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.CommitSetInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CommitSetInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CommitSetInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CommitSetInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitSetInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitSet: (f = msg.getCommitSet()) && proto.pfs_v2.CommitSet.toObject(includeInstance, f),
    commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    proto.pfs_v2.CommitInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CommitSetInfo}
 */
proto.pfs_v2.CommitSetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CommitSetInfo;
  return proto.pfs_v2.CommitSetInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CommitSetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CommitSetInfo}
 */
proto.pfs_v2.CommitSetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitSet;
      reader.readMessage(value,proto.pfs_v2.CommitSet.deserializeBinaryFromReader);
      msg.setCommitSet(value);
      break;
    case 2:
      var value = new proto.pfs_v2.CommitInfo;
      reader.readMessage(value,proto.pfs_v2.CommitInfo.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CommitSetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CommitSetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CommitSetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CommitSetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.CommitSet.serializeBinaryToWriter
    );
  }
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pfs_v2.CommitInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CommitSet commit_set = 1;
 * @return {?proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.CommitSetInfo.prototype.getCommitSet = function() {
  return /** @type{?proto.pfs_v2.CommitSet} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitSet, 1));
};


/**
 * @param {?proto.pfs_v2.CommitSet|undefined} value
 * @return {!proto.pfs_v2.CommitSetInfo} returns this
*/
proto.pfs_v2.CommitSetInfo.prototype.setCommitSet = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CommitSetInfo} returns this
 */
proto.pfs_v2.CommitSetInfo.prototype.clearCommitSet = function() {
  return this.setCommitSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CommitSetInfo.prototype.hasCommitSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CommitInfo commits = 2;
 * @return {!Array<!proto.pfs_v2.CommitInfo>}
 */
proto.pfs_v2.CommitSetInfo.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.pfs_v2.CommitInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.CommitInfo, 2));
};


/**
 * @param {!Array<!proto.pfs_v2.CommitInfo>} value
 * @return {!proto.pfs_v2.CommitSetInfo} returns this
*/
proto.pfs_v2.CommitSetInfo.prototype.setCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pfs_v2.CommitInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.CommitInfo}
 */
proto.pfs_v2.CommitSetInfo.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pfs_v2.CommitInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.CommitSetInfo} returns this
 */
proto.pfs_v2.CommitSetInfo.prototype.clearCommitsList = function() {
  return this.setCommitsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    fileType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    committed: (f = msg.getCommitted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    hash: msg.getHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FileInfo}
 */
proto.pfs_v2.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FileInfo;
  return proto.pfs_v2.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FileInfo}
 */
proto.pfs_v2.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {!proto.pfs_v2.FileType} */ (reader.readEnum());
      msg.setFileType(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCommitted(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getFileType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCommitted();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.FileInfo.prototype.getFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.FileInfo} returns this
*/
proto.pfs_v2.FileInfo.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FileInfo} returns this
 */
proto.pfs_v2.FileInfo.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FileInfo.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileType file_type = 2;
 * @return {!proto.pfs_v2.FileType}
 */
proto.pfs_v2.FileInfo.prototype.getFileType = function() {
  return /** @type {!proto.pfs_v2.FileType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pfs_v2.FileType} value
 * @return {!proto.pfs_v2.FileInfo} returns this
 */
proto.pfs_v2.FileInfo.prototype.setFileType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp committed = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.FileInfo.prototype.getCommitted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.FileInfo} returns this
*/
proto.pfs_v2.FileInfo.prototype.setCommitted = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FileInfo} returns this
 */
proto.pfs_v2.FileInfo.prototype.clearCommitted = function() {
  return this.setCommitted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FileInfo.prototype.hasCommitted = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 size_bytes = 4;
 * @return {number}
 */
proto.pfs_v2.FileInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.FileInfo} returns this
 */
proto.pfs_v2.FileInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes hash = 5;
 * @return {string}
 */
proto.pfs_v2.FileInfo.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes hash = 5;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.pfs_v2.FileInfo.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.pfs_v2.FileInfo.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs_v2.FileInfo} returns this
 */
proto.pfs_v2.FileInfo.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.Project}
 */
proto.pfs_v2.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.Project;
  return proto.pfs_v2.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.Project}
 */
proto.pfs_v2.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pfs_v2.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.Project} returns this
 */
proto.pfs_v2.Project.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ProjectInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ProjectInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ProjectInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ProjectInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    authInfo: (f = msg.getAuthInfo()) && proto.pfs_v2.AuthInfo.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ProjectInfo}
 */
proto.pfs_v2.ProjectInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ProjectInfo;
  return proto.pfs_v2.ProjectInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ProjectInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ProjectInfo}
 */
proto.pfs_v2.ProjectInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.pfs_v2.AuthInfo;
      reader.readMessage(value,proto.pfs_v2.AuthInfo.deserializeBinaryFromReader);
      msg.setAuthInfo(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ProjectInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ProjectInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ProjectInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ProjectInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.AuthInfo.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.ProjectInfo.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.ProjectInfo} returns this
*/
proto.pfs_v2.ProjectInfo.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ProjectInfo} returns this
 */
proto.pfs_v2.ProjectInfo.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ProjectInfo.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs_v2.ProjectInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ProjectInfo} returns this
 */
proto.pfs_v2.ProjectInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AuthInfo auth_info = 3;
 * @return {?proto.pfs_v2.AuthInfo}
 */
proto.pfs_v2.ProjectInfo.prototype.getAuthInfo = function() {
  return /** @type{?proto.pfs_v2.AuthInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.AuthInfo, 3));
};


/**
 * @param {?proto.pfs_v2.AuthInfo|undefined} value
 * @return {!proto.pfs_v2.ProjectInfo} returns this
*/
proto.pfs_v2.ProjectInfo.prototype.setAuthInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ProjectInfo} returns this
 */
proto.pfs_v2.ProjectInfo.prototype.clearAuthInfo = function() {
  return this.setAuthInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ProjectInfo.prototype.hasAuthInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.ProjectInfo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.ProjectInfo} returns this
*/
proto.pfs_v2.ProjectInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ProjectInfo} returns this
 */
proto.pfs_v2.ProjectInfo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ProjectInfo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> metadata = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pfs_v2.ProjectInfo.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pfs_v2.ProjectInfo} returns this
 */
proto.pfs_v2.ProjectInfo.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.ProjectPicker.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.pfs_v2.ProjectPicker.PickerCase = {
  PICKER_NOT_SET: 0,
  NAME: 1
};

/**
 * @return {proto.pfs_v2.ProjectPicker.PickerCase}
 */
proto.pfs_v2.ProjectPicker.prototype.getPickerCase = function() {
  return /** @type {proto.pfs_v2.ProjectPicker.PickerCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.ProjectPicker.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ProjectPicker.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ProjectPicker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ProjectPicker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ProjectPicker.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ProjectPicker}
 */
proto.pfs_v2.ProjectPicker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ProjectPicker;
  return proto.pfs_v2.ProjectPicker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ProjectPicker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ProjectPicker}
 */
proto.pfs_v2.ProjectPicker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ProjectPicker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ProjectPicker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ProjectPicker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ProjectPicker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pfs_v2.ProjectPicker.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ProjectPicker} returns this
 */
proto.pfs_v2.ProjectPicker.prototype.setName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.pfs_v2.ProjectPicker.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pfs_v2.ProjectPicker} returns this
 */
proto.pfs_v2.ProjectPicker.prototype.clearName = function() {
  return jspb.Message.setOneofField(this, 1, proto.pfs_v2.ProjectPicker.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ProjectPicker.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CreateRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CreateRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CreateRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    update: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CreateRepoRequest}
 */
proto.pfs_v2.CreateRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CreateRepoRequest;
  return proto.pfs_v2.CreateRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CreateRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CreateRepoRequest}
 */
proto.pfs_v2.CreateRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CreateRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CreateRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CreateRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.CreateRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.CreateRepoRequest} returns this
*/
proto.pfs_v2.CreateRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CreateRepoRequest} returns this
 */
proto.pfs_v2.CreateRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CreateRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs_v2.CreateRepoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CreateRepoRequest} returns this
 */
proto.pfs_v2.CreateRepoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update = 3;
 * @return {boolean}
 */
proto.pfs_v2.CreateRepoRequest.prototype.getUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.CreateRepoRequest} returns this
 */
proto.pfs_v2.CreateRepoRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectRepoRequest}
 */
proto.pfs_v2.InspectRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectRepoRequest;
  return proto.pfs_v2.InspectRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectRepoRequest}
 */
proto.pfs_v2.InspectRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.InspectRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.InspectRepoRequest} returns this
*/
proto.pfs_v2.InspectRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectRepoRequest} returns this
 */
proto.pfs_v2.InspectRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.ListRepoRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.pfs_v2.Project.toObject, includeInstance),
    page: (f = msg.getPage()) && proto.pfs_v2.RepoPage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListRepoRequest}
 */
proto.pfs_v2.ListRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListRepoRequest;
  return proto.pfs_v2.ListRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListRepoRequest}
 */
proto.pfs_v2.ListRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 3:
      var value = new proto.pfs_v2.RepoPage;
      reader.readMessage(value,proto.pfs_v2.RepoPage.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.RepoPage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pfs_v2.ListRepoRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ListRepoRequest} returns this
 */
proto.pfs_v2.ListRepoRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Project projects = 2;
 * @return {!Array<!proto.pfs_v2.Project>}
 */
proto.pfs_v2.ListRepoRequest.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.pfs_v2.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Project, 2));
};


/**
 * @param {!Array<!proto.pfs_v2.Project>} value
 * @return {!proto.pfs_v2.ListRepoRequest} returns this
*/
proto.pfs_v2.ListRepoRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pfs_v2.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Project}
 */
proto.pfs_v2.ListRepoRequest.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pfs_v2.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.ListRepoRequest} returns this
 */
proto.pfs_v2.ListRepoRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional RepoPage page = 3;
 * @return {?proto.pfs_v2.RepoPage}
 */
proto.pfs_v2.ListRepoRequest.prototype.getPage = function() {
  return /** @type{?proto.pfs_v2.RepoPage} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.RepoPage, 3));
};


/**
 * @param {?proto.pfs_v2.RepoPage|undefined} value
 * @return {!proto.pfs_v2.ListRepoRequest} returns this
*/
proto.pfs_v2.ListRepoRequest.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListRepoRequest} returns this
 */
proto.pfs_v2.ListRepoRequest.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListRepoRequest.prototype.hasPage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RepoPage.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RepoPage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RepoPage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPage.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageIndex: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RepoPage}
 */
proto.pfs_v2.RepoPage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RepoPage;
  return proto.pfs_v2.RepoPage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RepoPage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RepoPage}
 */
proto.pfs_v2.RepoPage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pfs_v2.RepoPage.Ordering} */ (reader.readEnum());
      msg.setOrder(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RepoPage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RepoPage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RepoPage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RepoPage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageIndex();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pfs_v2.RepoPage.Ordering = {
  PROJECT_REPO: 0
};

/**
 * optional Ordering order = 1;
 * @return {!proto.pfs_v2.RepoPage.Ordering}
 */
proto.pfs_v2.RepoPage.prototype.getOrder = function() {
  return /** @type {!proto.pfs_v2.RepoPage.Ordering} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pfs_v2.RepoPage.Ordering} value
 * @return {!proto.pfs_v2.RepoPage} returns this
 */
proto.pfs_v2.RepoPage.prototype.setOrder = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.pfs_v2.RepoPage.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.RepoPage} returns this
 */
proto.pfs_v2.RepoPage.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 page_index = 3;
 * @return {number}
 */
proto.pfs_v2.RepoPage.prototype.getPageIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.RepoPage} returns this
 */
proto.pfs_v2.RepoPage.prototype.setPageIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteRepoRequest}
 */
proto.pfs_v2.DeleteRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteRepoRequest;
  return proto.pfs_v2.DeleteRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteRepoRequest}
 */
proto.pfs_v2.DeleteRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.DeleteRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.DeleteRepoRequest} returns this
*/
proto.pfs_v2.DeleteRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DeleteRepoRequest} returns this
 */
proto.pfs_v2.DeleteRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DeleteRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs_v2.DeleteRepoRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteRepoRequest} returns this
 */
proto.pfs_v2.DeleteRepoRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.DeleteReposRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteReposRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteReposRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteReposRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteReposRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.pfs_v2.Project.toObject, includeInstance),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteReposRequest}
 */
proto.pfs_v2.DeleteReposRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteReposRequest;
  return proto.pfs_v2.DeleteReposRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteReposRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteReposRequest}
 */
proto.pfs_v2.DeleteReposRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteReposRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteReposRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteReposRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteReposRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.pfs_v2.Project>}
 */
proto.pfs_v2.DeleteReposRequest.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.pfs_v2.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.Project>} value
 * @return {!proto.pfs_v2.DeleteReposRequest} returns this
*/
proto.pfs_v2.DeleteReposRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Project}
 */
proto.pfs_v2.DeleteReposRequest.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.DeleteReposRequest} returns this
 */
proto.pfs_v2.DeleteReposRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs_v2.DeleteReposRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteReposRequest} returns this
 */
proto.pfs_v2.DeleteReposRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool all = 3;
 * @return {boolean}
 */
proto.pfs_v2.DeleteReposRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteReposRequest} returns this
 */
proto.pfs_v2.DeleteReposRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteRepoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteRepoResponse}
 */
proto.pfs_v2.DeleteRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteRepoResponse;
  return proto.pfs_v2.DeleteRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteRepoResponse}
 */
proto.pfs_v2.DeleteRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteRepoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool deleted = 1;
 * @return {boolean}
 */
proto.pfs_v2.DeleteRepoResponse.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteRepoResponse} returns this
 */
proto.pfs_v2.DeleteRepoResponse.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.DeleteReposResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteReposResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteReposResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteReposResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteReposResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reposList: jspb.Message.toObjectList(msg.getReposList(),
    proto.pfs_v2.Repo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteReposResponse}
 */
proto.pfs_v2.DeleteReposResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteReposResponse;
  return proto.pfs_v2.DeleteReposResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteReposResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteReposResponse}
 */
proto.pfs_v2.DeleteReposResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.addRepos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteReposResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteReposResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteReposResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteReposResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReposList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Repo repos = 1;
 * @return {!Array<!proto.pfs_v2.Repo>}
 */
proto.pfs_v2.DeleteReposResponse.prototype.getReposList = function() {
  return /** @type{!Array<!proto.pfs_v2.Repo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.Repo>} value
 * @return {!proto.pfs_v2.DeleteReposResponse} returns this
*/
proto.pfs_v2.DeleteReposResponse.prototype.setReposList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.Repo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Repo}
 */
proto.pfs_v2.DeleteReposResponse.prototype.addRepos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.Repo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.DeleteReposResponse} returns this
 */
proto.pfs_v2.DeleteReposResponse.prototype.clearReposList = function() {
  return this.setReposList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.StartCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.StartCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.StartCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.StartCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: (f = msg.getParent()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.StartCommitRequest}
 */
proto.pfs_v2.StartCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.StartCommitRequest;
  return proto.pfs_v2.StartCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.StartCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.StartCommitRequest}
 */
proto.pfs_v2.StartCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.StartCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.StartCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.StartCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.StartCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit parent = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.StartCommitRequest.prototype.getParent = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.StartCommitRequest} returns this
*/
proto.pfs_v2.StartCommitRequest.prototype.setParent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.StartCommitRequest} returns this
 */
proto.pfs_v2.StartCommitRequest.prototype.clearParent = function() {
  return this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.StartCommitRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs_v2.StartCommitRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.StartCommitRequest} returns this
 */
proto.pfs_v2.StartCommitRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Branch branch = 3;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.StartCommitRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 3));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.StartCommitRequest} returns this
*/
proto.pfs_v2.StartCommitRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.StartCommitRequest} returns this
 */
proto.pfs_v2.StartCommitRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.StartCommitRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FinishCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FinishCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FinishCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FinishCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FinishCommitRequest}
 */
proto.pfs_v2.FinishCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FinishCommitRequest;
  return proto.pfs_v2.FinishCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FinishCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FinishCommitRequest}
 */
proto.pfs_v2.FinishCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FinishCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FinishCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FinishCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FinishCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.FinishCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.FinishCommitRequest} returns this
*/
proto.pfs_v2.FinishCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FinishCommitRequest} returns this
 */
proto.pfs_v2.FinishCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FinishCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs_v2.FinishCommitRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.FinishCommitRequest} returns this
 */
proto.pfs_v2.FinishCommitRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.pfs_v2.FinishCommitRequest.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.FinishCommitRequest} returns this
 */
proto.pfs_v2.FinishCommitRequest.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool force = 4;
 * @return {boolean}
 */
proto.pfs_v2.FinishCommitRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.FinishCommitRequest} returns this
 */
proto.pfs_v2.FinishCommitRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    wait: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectCommitRequest}
 */
proto.pfs_v2.InspectCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectCommitRequest;
  return proto.pfs_v2.InspectCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectCommitRequest}
 */
proto.pfs_v2.InspectCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {!proto.pfs_v2.CommitState} */ (reader.readEnum());
      msg.setWait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getWait();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.InspectCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.InspectCommitRequest} returns this
*/
proto.pfs_v2.InspectCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectCommitRequest} returns this
 */
proto.pfs_v2.InspectCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitState wait = 2;
 * @return {!proto.pfs_v2.CommitState}
 */
proto.pfs_v2.InspectCommitRequest.prototype.getWait = function() {
  return /** @type {!proto.pfs_v2.CommitState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pfs_v2.CommitState} value
 * @return {!proto.pfs_v2.InspectCommitRequest} returns this
 */
proto.pfs_v2.InspectCommitRequest.prototype.setWait = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    number: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    originKind: jspb.Message.getFieldWithDefault(msg, 7, 0),
    startedTime: (f = msg.getStartedTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListCommitRequest}
 */
proto.pfs_v2.ListCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListCommitRequest;
  return proto.pfs_v2.ListCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListCommitRequest}
 */
proto.pfs_v2.ListCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 7:
      var value = /** @type {!proto.pfs_v2.OriginKind} */ (reader.readEnum());
      msg.setOriginKind(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getOriginKind();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getStartedTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.ListCommitRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
*/
proto.pfs_v2.ListCommitRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit from = 2;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.ListCommitRequest.prototype.getFrom = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 2));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
*/
proto.pfs_v2.ListCommitRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Commit to = 3;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.ListCommitRequest.prototype.getTo = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 3));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
*/
proto.pfs_v2.ListCommitRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 number = 4;
 * @return {number}
 */
proto.pfs_v2.ListCommitRequest.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool reverse = 5;
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool all = 6;
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional OriginKind origin_kind = 7;
 * @return {!proto.pfs_v2.OriginKind}
 */
proto.pfs_v2.ListCommitRequest.prototype.getOriginKind = function() {
  return /** @type {!proto.pfs_v2.OriginKind} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.pfs_v2.OriginKind} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.setOriginKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp started_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs_v2.ListCommitRequest.prototype.getStartedTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
*/
proto.pfs_v2.ListCommitRequest.prototype.setStartedTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListCommitRequest} returns this
 */
proto.pfs_v2.ListCommitRequest.prototype.clearStartedTime = function() {
  return this.setStartedTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListCommitRequest.prototype.hasStartedTime = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectCommitSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectCommitSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectCommitSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitSet: (f = msg.getCommitSet()) && proto.pfs_v2.CommitSet.toObject(includeInstance, f),
    wait: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectCommitSetRequest}
 */
proto.pfs_v2.InspectCommitSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectCommitSetRequest;
  return proto.pfs_v2.InspectCommitSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectCommitSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectCommitSetRequest}
 */
proto.pfs_v2.InspectCommitSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitSet;
      reader.readMessage(value,proto.pfs_v2.CommitSet.deserializeBinaryFromReader);
      msg.setCommitSet(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectCommitSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectCommitSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectCommitSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.CommitSet.serializeBinaryToWriter
    );
  }
  f = message.getWait();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional CommitSet commit_set = 1;
 * @return {?proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.getCommitSet = function() {
  return /** @type{?proto.pfs_v2.CommitSet} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitSet, 1));
};


/**
 * @param {?proto.pfs_v2.CommitSet|undefined} value
 * @return {!proto.pfs_v2.InspectCommitSetRequest} returns this
*/
proto.pfs_v2.InspectCommitSetRequest.prototype.setCommitSet = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectCommitSetRequest} returns this
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.clearCommitSet = function() {
  return this.setCommitSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.hasCommitSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool wait = 2;
 * @return {boolean}
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.getWait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.InspectCommitSetRequest} returns this
 */
proto.pfs_v2.InspectCommitSetRequest.prototype.setWait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListCommitSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListCommitSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListCommitSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListCommitSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListCommitSetRequest}
 */
proto.pfs_v2.ListCommitSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListCommitSetRequest;
  return proto.pfs_v2.ListCommitSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListCommitSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListCommitSetRequest}
 */
proto.pfs_v2.ListCommitSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListCommitSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListCommitSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListCommitSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListCommitSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.ListCommitSetRequest.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.ListCommitSetRequest} returns this
*/
proto.pfs_v2.ListCommitSetRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListCommitSetRequest} returns this
 */
proto.pfs_v2.ListCommitSetRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListCommitSetRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SquashCommitSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SquashCommitSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SquashCommitSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitSet: (f = msg.getCommitSet()) && proto.pfs_v2.CommitSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SquashCommitSetRequest}
 */
proto.pfs_v2.SquashCommitSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SquashCommitSetRequest;
  return proto.pfs_v2.SquashCommitSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SquashCommitSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SquashCommitSetRequest}
 */
proto.pfs_v2.SquashCommitSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitSet;
      reader.readMessage(value,proto.pfs_v2.CommitSet.deserializeBinaryFromReader);
      msg.setCommitSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SquashCommitSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SquashCommitSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SquashCommitSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.CommitSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional CommitSet commit_set = 1;
 * @return {?proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.SquashCommitSetRequest.prototype.getCommitSet = function() {
  return /** @type{?proto.pfs_v2.CommitSet} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitSet, 1));
};


/**
 * @param {?proto.pfs_v2.CommitSet|undefined} value
 * @return {!proto.pfs_v2.SquashCommitSetRequest} returns this
*/
proto.pfs_v2.SquashCommitSetRequest.prototype.setCommitSet = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SquashCommitSetRequest} returns this
 */
proto.pfs_v2.SquashCommitSetRequest.prototype.clearCommitSet = function() {
  return this.setCommitSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SquashCommitSetRequest.prototype.hasCommitSet = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DropCommitSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DropCommitSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DropCommitSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitSet: (f = msg.getCommitSet()) && proto.pfs_v2.CommitSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DropCommitSetRequest}
 */
proto.pfs_v2.DropCommitSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DropCommitSetRequest;
  return proto.pfs_v2.DropCommitSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DropCommitSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DropCommitSetRequest}
 */
proto.pfs_v2.DropCommitSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitSet;
      reader.readMessage(value,proto.pfs_v2.CommitSet.deserializeBinaryFromReader);
      msg.setCommitSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DropCommitSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DropCommitSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DropCommitSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.CommitSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional CommitSet commit_set = 1;
 * @return {?proto.pfs_v2.CommitSet}
 */
proto.pfs_v2.DropCommitSetRequest.prototype.getCommitSet = function() {
  return /** @type{?proto.pfs_v2.CommitSet} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CommitSet, 1));
};


/**
 * @param {?proto.pfs_v2.CommitSet|undefined} value
 * @return {!proto.pfs_v2.DropCommitSetRequest} returns this
*/
proto.pfs_v2.DropCommitSetRequest.prototype.setCommitSet = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DropCommitSetRequest} returns this
 */
proto.pfs_v2.DropCommitSetRequest.prototype.clearCommitSet = function() {
  return this.setCommitSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DropCommitSetRequest.prototype.hasCommitSet = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SubscribeCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SubscribeCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SubscribeCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    branch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    from: (f = msg.getFrom()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    originKind: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SubscribeCommitRequest}
 */
proto.pfs_v2.SubscribeCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SubscribeCommitRequest;
  return proto.pfs_v2.SubscribeCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SubscribeCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SubscribeCommitRequest}
 */
proto.pfs_v2.SubscribeCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = /** @type {!proto.pfs_v2.CommitState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 6:
      var value = /** @type {!proto.pfs_v2.OriginKind} */ (reader.readEnum());
      msg.setOriginKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SubscribeCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SubscribeCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SubscribeCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOriginKind();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
*/
proto.pfs_v2.SubscribeCommitRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Commit from = 3;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getFrom = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 3));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
*/
proto.pfs_v2.SubscribeCommitRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CommitState state = 4;
 * @return {!proto.pfs_v2.CommitState}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getState = function() {
  return /** @type {!proto.pfs_v2.CommitState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pfs_v2.CommitState} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool all = 5;
 * @return {boolean}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional OriginKind origin_kind = 6;
 * @return {!proto.pfs_v2.OriginKind}
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.getOriginKind = function() {
  return /** @type {!proto.pfs_v2.OriginKind} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pfs_v2.OriginKind} value
 * @return {!proto.pfs_v2.SubscribeCommitRequest} returns this
 */
proto.pfs_v2.SubscribeCommitRequest.prototype.setOriginKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ClearCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ClearCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ClearCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ClearCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ClearCommitRequest}
 */
proto.pfs_v2.ClearCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ClearCommitRequest;
  return proto.pfs_v2.ClearCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ClearCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ClearCommitRequest}
 */
proto.pfs_v2.ClearCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ClearCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ClearCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ClearCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ClearCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.ClearCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.ClearCommitRequest} returns this
*/
proto.pfs_v2.ClearCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ClearCommitRequest} returns this
 */
proto.pfs_v2.ClearCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ClearCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SquashCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SquashCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SquashCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SquashCommitRequest}
 */
proto.pfs_v2.SquashCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SquashCommitRequest;
  return proto.pfs_v2.SquashCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SquashCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SquashCommitRequest}
 */
proto.pfs_v2.SquashCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SquashCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SquashCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SquashCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.SquashCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.SquashCommitRequest} returns this
*/
proto.pfs_v2.SquashCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SquashCommitRequest} returns this
 */
proto.pfs_v2.SquashCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SquashCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool recursive = 2;
 * @return {boolean}
 */
proto.pfs_v2.SquashCommitRequest.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.SquashCommitRequest} returns this
 */
proto.pfs_v2.SquashCommitRequest.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SquashCommitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SquashCommitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SquashCommitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SquashCommitResponse}
 */
proto.pfs_v2.SquashCommitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SquashCommitResponse;
  return proto.pfs_v2.SquashCommitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SquashCommitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SquashCommitResponse}
 */
proto.pfs_v2.SquashCommitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SquashCommitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SquashCommitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SquashCommitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SquashCommitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DropCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DropCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DropCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DropCommitRequest}
 */
proto.pfs_v2.DropCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DropCommitRequest;
  return proto.pfs_v2.DropCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DropCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DropCommitRequest}
 */
proto.pfs_v2.DropCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DropCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DropCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DropCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.DropCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.DropCommitRequest} returns this
*/
proto.pfs_v2.DropCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DropCommitRequest} returns this
 */
proto.pfs_v2.DropCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DropCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool recursive = 2;
 * @return {boolean}
 */
proto.pfs_v2.DropCommitRequest.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DropCommitRequest} returns this
 */
proto.pfs_v2.DropCommitRequest.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.WalkCommitProvenanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.WalkCommitProvenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.WalkCommitProvenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkCommitProvenanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startList: jspb.Message.toObjectList(msg.getStartList(),
    proto.pfs_v2.CommitPicker.toObject, includeInstance),
    maxCommits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.WalkCommitProvenanceRequest;
  return proto.pfs_v2.WalkCommitProvenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.WalkCommitProvenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitPicker;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.deserializeBinaryFromReader);
      msg.addStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxCommits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.WalkCommitProvenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.WalkCommitProvenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkCommitProvenanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.CommitPicker.serializeBinaryToWriter
    );
  }
  f = message.getMaxCommits();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated CommitPicker start = 1;
 * @return {!Array<!proto.pfs_v2.CommitPicker>}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.getStartList = function() {
  return /** @type{!Array<!proto.pfs_v2.CommitPicker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.CommitPicker, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.CommitPicker>} value
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest} returns this
*/
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.setStartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.CommitPicker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.CommitPicker}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.addStart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.CommitPicker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.clearStartList = function() {
  return this.setStartList([]);
};


/**
 * optional uint64 max_commits = 2;
 * @return {number}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.getMaxCommits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.setMaxCommits = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 max_depth = 3;
 * @return {number}
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkCommitProvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitProvenanceRequest.prototype.setMaxDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.WalkCommitSubvenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.WalkCommitSubvenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startList: jspb.Message.toObjectList(msg.getStartList(),
    proto.pfs_v2.CommitPicker.toObject, includeInstance),
    maxCommits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.WalkCommitSubvenanceRequest;
  return proto.pfs_v2.WalkCommitSubvenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.WalkCommitSubvenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.CommitPicker;
      reader.readMessage(value,proto.pfs_v2.CommitPicker.deserializeBinaryFromReader);
      msg.addStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxCommits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.WalkCommitSubvenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.WalkCommitSubvenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.CommitPicker.serializeBinaryToWriter
    );
  }
  f = message.getMaxCommits();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated CommitPicker start = 1;
 * @return {!Array<!proto.pfs_v2.CommitPicker>}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.getStartList = function() {
  return /** @type{!Array<!proto.pfs_v2.CommitPicker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.CommitPicker, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.CommitPicker>} value
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest} returns this
*/
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.setStartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.CommitPicker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.CommitPicker}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.addStart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.CommitPicker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.clearStartList = function() {
  return this.setStartList([]);
};


/**
 * optional uint64 max_commits = 2;
 * @return {number}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.getMaxCommits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.setMaxCommits = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 max_depth = 3;
 * @return {number}
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkCommitSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkCommitSubvenanceRequest.prototype.setMaxDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.WalkBranchProvenanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.WalkBranchProvenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.WalkBranchProvenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkBranchProvenanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startList: jspb.Message.toObjectList(msg.getStartList(),
    proto.pfs_v2.BranchPicker.toObject, includeInstance),
    maxBranches: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.WalkBranchProvenanceRequest;
  return proto.pfs_v2.WalkBranchProvenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.WalkBranchProvenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.BranchPicker;
      reader.readMessage(value,proto.pfs_v2.BranchPicker.deserializeBinaryFromReader);
      msg.addStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxBranches(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.WalkBranchProvenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.WalkBranchProvenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkBranchProvenanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.BranchPicker.serializeBinaryToWriter
    );
  }
  f = message.getMaxBranches();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated BranchPicker start = 1;
 * @return {!Array<!proto.pfs_v2.BranchPicker>}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.getStartList = function() {
  return /** @type{!Array<!proto.pfs_v2.BranchPicker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.BranchPicker, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.BranchPicker>} value
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest} returns this
*/
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.setStartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.BranchPicker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.addStart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.BranchPicker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.clearStartList = function() {
  return this.setStartList([]);
};


/**
 * optional uint64 max_branches = 2;
 * @return {number}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.getMaxBranches = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.setMaxBranches = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 max_depth = 3;
 * @return {number}
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkBranchProvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchProvenanceRequest.prototype.setMaxDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.WalkBranchSubvenanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.WalkBranchSubvenanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    startList: jspb.Message.toObjectList(msg.getStartList(),
    proto.pfs_v2.BranchPicker.toObject, includeInstance),
    maxBranches: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxDepth: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.WalkBranchSubvenanceRequest;
  return proto.pfs_v2.WalkBranchSubvenanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.WalkBranchSubvenanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.BranchPicker;
      reader.readMessage(value,proto.pfs_v2.BranchPicker.deserializeBinaryFromReader);
      msg.addStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxBranches(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDepth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.WalkBranchSubvenanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.WalkBranchSubvenanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.BranchPicker.serializeBinaryToWriter
    );
  }
  f = message.getMaxBranches();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxDepth();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated BranchPicker start = 1;
 * @return {!Array<!proto.pfs_v2.BranchPicker>}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.getStartList = function() {
  return /** @type{!Array<!proto.pfs_v2.BranchPicker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.BranchPicker, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.BranchPicker>} value
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest} returns this
*/
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.setStartList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.BranchPicker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.BranchPicker}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.addStart = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.BranchPicker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.clearStartList = function() {
  return this.setStartList([]);
};


/**
 * optional uint64 max_branches = 2;
 * @return {number}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.getMaxBranches = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.setMaxBranches = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 max_depth = 3;
 * @return {number}
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkBranchSubvenanceRequest} returns this
 */
proto.pfs_v2.WalkBranchSubvenanceRequest.prototype.setMaxDepth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DropCommitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DropCommitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DropCommitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DropCommitResponse}
 */
proto.pfs_v2.DropCommitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DropCommitResponse;
  return proto.pfs_v2.DropCommitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DropCommitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DropCommitResponse}
 */
proto.pfs_v2.DropCommitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DropCommitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DropCommitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DropCommitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DropCommitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.CreateBranchRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CreateBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CreateBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CreateBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    head: (f = msg.getHead()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs_v2.Branch.toObject, includeInstance),
    trigger: (f = msg.getTrigger()) && proto.pfs_v2.Trigger.toObject(includeInstance, f),
    newCommitSet: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CreateBranchRequest}
 */
proto.pfs_v2.CreateBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CreateBranchRequest;
  return proto.pfs_v2.CreateBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CreateBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CreateBranchRequest}
 */
proto.pfs_v2.CreateBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 3:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    case 4:
      var value = new proto.pfs_v2.Trigger;
      reader.readMessage(value,proto.pfs_v2.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNewCommitSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CreateBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CreateBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CreateBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.Trigger.serializeBinaryToWriter
    );
  }
  f = message.getNewCommitSet();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Commit head = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.CreateBranchRequest.prototype.getHead = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
*/
proto.pfs_v2.CreateBranchRequest.prototype.setHead = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
 */
proto.pfs_v2.CreateBranchRequest.prototype.clearHead = function() {
  return this.setHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CreateBranchRequest.prototype.hasHead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Branch branch = 2;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.CreateBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 2));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
*/
proto.pfs_v2.CreateBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
 */
proto.pfs_v2.CreateBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CreateBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Branch provenance = 3;
 * @return {!Array<!proto.pfs_v2.Branch>}
 */
proto.pfs_v2.CreateBranchRequest.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs_v2.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.Branch, 3));
};


/**
 * @param {!Array<!proto.pfs_v2.Branch>} value
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
*/
proto.pfs_v2.CreateBranchRequest.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs_v2.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.Branch}
 */
proto.pfs_v2.CreateBranchRequest.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs_v2.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
 */
proto.pfs_v2.CreateBranchRequest.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};


/**
 * optional Trigger trigger = 4;
 * @return {?proto.pfs_v2.Trigger}
 */
proto.pfs_v2.CreateBranchRequest.prototype.getTrigger = function() {
  return /** @type{?proto.pfs_v2.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Trigger, 4));
};


/**
 * @param {?proto.pfs_v2.Trigger|undefined} value
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
*/
proto.pfs_v2.CreateBranchRequest.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
 */
proto.pfs_v2.CreateBranchRequest.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CreateBranchRequest.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool new_commit_set = 5;
 * @return {boolean}
 */
proto.pfs_v2.CreateBranchRequest.prototype.getNewCommitSet = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.CreateBranchRequest} returns this
 */
proto.pfs_v2.CreateBranchRequest.prototype.setNewCommitSet = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FindCommitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FindCommitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FindCommitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FindCommitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    filePath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FindCommitsRequest}
 */
proto.pfs_v2.FindCommitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FindCommitsRequest;
  return proto.pfs_v2.FindCommitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FindCommitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FindCommitsRequest}
 */
proto.pfs_v2.FindCommitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilePath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FindCommitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FindCommitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FindCommitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FindCommitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getFilePath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Commit start = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.FindCommitsRequest.prototype.getStart = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.FindCommitsRequest} returns this
*/
proto.pfs_v2.FindCommitsRequest.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FindCommitsRequest} returns this
 */
proto.pfs_v2.FindCommitsRequest.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FindCommitsRequest.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string file_path = 2;
 * @return {string}
 */
proto.pfs_v2.FindCommitsRequest.prototype.getFilePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.FindCommitsRequest} returns this
 */
proto.pfs_v2.FindCommitsRequest.prototype.setFilePath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.pfs_v2.FindCommitsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.FindCommitsRequest} returns this
 */
proto.pfs_v2.FindCommitsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.FindCommitsResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.pfs_v2.FindCommitsResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  FOUND_COMMIT: 1,
  LAST_SEARCHED_COMMIT: 2
};

/**
 * @return {proto.pfs_v2.FindCommitsResponse.ResultCase}
 */
proto.pfs_v2.FindCommitsResponse.prototype.getResultCase = function() {
  return /** @type {proto.pfs_v2.FindCommitsResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.FindCommitsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FindCommitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FindCommitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FindCommitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FindCommitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    foundCommit: (f = msg.getFoundCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    lastSearchedCommit: (f = msg.getLastSearchedCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    commitsSearched: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FindCommitsResponse}
 */
proto.pfs_v2.FindCommitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FindCommitsResponse;
  return proto.pfs_v2.FindCommitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FindCommitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FindCommitsResponse}
 */
proto.pfs_v2.FindCommitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setFoundCommit(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setLastSearchedCommit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommitsSearched(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FindCommitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FindCommitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FindCommitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FindCommitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoundCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getLastSearchedCommit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getCommitsSearched();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Commit found_commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.FindCommitsResponse.prototype.getFoundCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.FindCommitsResponse} returns this
*/
proto.pfs_v2.FindCommitsResponse.prototype.setFoundCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.FindCommitsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FindCommitsResponse} returns this
 */
proto.pfs_v2.FindCommitsResponse.prototype.clearFoundCommit = function() {
  return this.setFoundCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FindCommitsResponse.prototype.hasFoundCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit last_searched_commit = 2;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.FindCommitsResponse.prototype.getLastSearchedCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 2));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.FindCommitsResponse} returns this
*/
proto.pfs_v2.FindCommitsResponse.prototype.setLastSearchedCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.FindCommitsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FindCommitsResponse} returns this
 */
proto.pfs_v2.FindCommitsResponse.prototype.clearLastSearchedCommit = function() {
  return this.setLastSearchedCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FindCommitsResponse.prototype.hasLastSearchedCommit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 commits_searched = 3;
 * @return {number}
 */
proto.pfs_v2.FindCommitsResponse.prototype.getCommitsSearched = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.FindCommitsResponse} returns this
 */
proto.pfs_v2.FindCommitsResponse.prototype.setCommitsSearched = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectBranchRequest}
 */
proto.pfs_v2.InspectBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectBranchRequest;
  return proto.pfs_v2.InspectBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectBranchRequest}
 */
proto.pfs_v2.InspectBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.InspectBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 1));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.InspectBranchRequest} returns this
*/
proto.pfs_v2.InspectBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectBranchRequest} returns this
 */
proto.pfs_v2.InspectBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs_v2.Repo.toObject(includeInstance, f),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListBranchRequest}
 */
proto.pfs_v2.ListBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListBranchRequest;
  return proto.pfs_v2.ListBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListBranchRequest}
 */
proto.pfs_v2.ListBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Repo;
      reader.readMessage(value,proto.pfs_v2.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Repo.serializeBinaryToWriter
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs_v2.Repo}
 */
proto.pfs_v2.ListBranchRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs_v2.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Repo, 1));
};


/**
 * @param {?proto.pfs_v2.Repo|undefined} value
 * @return {!proto.pfs_v2.ListBranchRequest} returns this
*/
proto.pfs_v2.ListBranchRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListBranchRequest} returns this
 */
proto.pfs_v2.ListBranchRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListBranchRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool reverse = 2;
 * @return {boolean}
 */
proto.pfs_v2.ListBranchRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.ListBranchRequest} returns this
 */
proto.pfs_v2.ListBranchRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs_v2.Branch.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteBranchRequest}
 */
proto.pfs_v2.DeleteBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteBranchRequest;
  return proto.pfs_v2.DeleteBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteBranchRequest}
 */
proto.pfs_v2.DeleteBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Branch;
      reader.readMessage(value,proto.pfs_v2.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Branch.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs_v2.Branch}
 */
proto.pfs_v2.DeleteBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs_v2.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Branch, 1));
};


/**
 * @param {?proto.pfs_v2.Branch|undefined} value
 * @return {!proto.pfs_v2.DeleteBranchRequest} returns this
*/
proto.pfs_v2.DeleteBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DeleteBranchRequest} returns this
 */
proto.pfs_v2.DeleteBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DeleteBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs_v2.DeleteBranchRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteBranchRequest} returns this
 */
proto.pfs_v2.DeleteBranchRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CreateProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CreateProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CreateProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    update: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CreateProjectRequest}
 */
proto.pfs_v2.CreateProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CreateProjectRequest;
  return proto.pfs_v2.CreateProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CreateProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CreateProjectRequest}
 */
proto.pfs_v2.CreateProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CreateProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CreateProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CreateProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.CreateProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.CreateProjectRequest} returns this
*/
proto.pfs_v2.CreateProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CreateProjectRequest} returns this
 */
proto.pfs_v2.CreateProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CreateProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs_v2.CreateProjectRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CreateProjectRequest} returns this
 */
proto.pfs_v2.CreateProjectRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update = 3;
 * @return {boolean}
 */
proto.pfs_v2.CreateProjectRequest.prototype.getUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.CreateProjectRequest} returns this
 */
proto.pfs_v2.CreateProjectRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectProjectRequest}
 */
proto.pfs_v2.InspectProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectProjectRequest;
  return proto.pfs_v2.InspectProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectProjectRequest}
 */
proto.pfs_v2.InspectProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.InspectProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.InspectProjectRequest} returns this
*/
proto.pfs_v2.InspectProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectProjectRequest} returns this
 */
proto.pfs_v2.InspectProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectProjectV2Request.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectProjectV2Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectProjectV2Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectV2Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectProjectV2Request}
 */
proto.pfs_v2.InspectProjectV2Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectProjectV2Request;
  return proto.pfs_v2.InspectProjectV2Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectProjectV2Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectProjectV2Request}
 */
proto.pfs_v2.InspectProjectV2Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectProjectV2Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectProjectV2Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectProjectV2Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectV2Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.InspectProjectV2Request.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.InspectProjectV2Request} returns this
*/
proto.pfs_v2.InspectProjectV2Request.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectProjectV2Request} returns this
 */
proto.pfs_v2.InspectProjectV2Request.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectProjectV2Request.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectProjectV2Response.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectProjectV2Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectProjectV2Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectV2Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.pfs_v2.ProjectInfo.toObject(includeInstance, f),
    defaultsJson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectProjectV2Response}
 */
proto.pfs_v2.InspectProjectV2Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectProjectV2Response;
  return proto.pfs_v2.InspectProjectV2Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectProjectV2Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectProjectV2Response}
 */
proto.pfs_v2.InspectProjectV2Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.ProjectInfo;
      reader.readMessage(value,proto.pfs_v2.ProjectInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectProjectV2Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectProjectV2Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectProjectV2Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectProjectV2Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.ProjectInfo.serializeBinaryToWriter
    );
  }
  f = message.getDefaultsJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ProjectInfo info = 1;
 * @return {?proto.pfs_v2.ProjectInfo}
 */
proto.pfs_v2.InspectProjectV2Response.prototype.getInfo = function() {
  return /** @type{?proto.pfs_v2.ProjectInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.ProjectInfo, 1));
};


/**
 * @param {?proto.pfs_v2.ProjectInfo|undefined} value
 * @return {!proto.pfs_v2.InspectProjectV2Response} returns this
*/
proto.pfs_v2.InspectProjectV2Response.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectProjectV2Response} returns this
 */
proto.pfs_v2.InspectProjectV2Response.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectProjectV2Response.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaults_json = 2;
 * @return {string}
 */
proto.pfs_v2.InspectProjectV2Response.prototype.getDefaultsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.InspectProjectV2Response} returns this
 */
proto.pfs_v2.InspectProjectV2Response.prototype.setDefaultsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListProjectRequest}
 */
proto.pfs_v2.ListProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListProjectRequest;
  return proto.pfs_v2.ListProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListProjectRequest}
 */
proto.pfs_v2.ListProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteProjectRequest}
 */
proto.pfs_v2.DeleteProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteProjectRequest;
  return proto.pfs_v2.DeleteProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteProjectRequest}
 */
proto.pfs_v2.DeleteProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.DeleteProjectRequest.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.DeleteProjectRequest} returns this
*/
proto.pfs_v2.DeleteProjectRequest.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DeleteProjectRequest} returns this
 */
proto.pfs_v2.DeleteProjectRequest.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DeleteProjectRequest.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs_v2.DeleteProjectRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DeleteProjectRequest} returns this
 */
proto.pfs_v2.DeleteProjectRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.AddFile.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.pfs_v2.AddFile.SourceCase = {
  SOURCE_NOT_SET: 0,
  RAW: 3,
  URL: 4
};

/**
 * @return {proto.pfs_v2.AddFile.SourceCase}
 */
proto.pfs_v2.AddFile.prototype.getSourceCase = function() {
  return /** @type {proto.pfs_v2.AddFile.SourceCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.AddFile.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.AddFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.AddFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.AddFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datum: jspb.Message.getFieldWithDefault(msg, 2, ""),
    raw: (f = msg.getRaw()) && google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto.pfs_v2.AddFile.URLSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.AddFile}
 */
proto.pfs_v2.AddFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.AddFile;
  return proto.pfs_v2.AddFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.AddFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.AddFile}
 */
proto.pfs_v2.AddFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatum(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BytesValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader);
      msg.setRaw(value);
      break;
    case 4:
      var value = new proto.pfs_v2.AddFile.URLSource;
      reader.readMessage(value,proto.pfs_v2.AddFile.URLSource.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.AddFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.AddFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.AddFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatum();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRaw();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.AddFile.URLSource.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.AddFile.URLSource.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.AddFile.URLSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.AddFile.URLSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFile.URLSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    concurrency: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.AddFile.URLSource}
 */
proto.pfs_v2.AddFile.URLSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.AddFile.URLSource;
  return proto.pfs_v2.AddFile.URLSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.AddFile.URLSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.AddFile.URLSource}
 */
proto.pfs_v2.AddFile.URLSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConcurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.AddFile.URLSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.AddFile.URLSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.AddFile.URLSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFile.URLSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getConcurrency();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string URL = 1;
 * @return {string}
 */
proto.pfs_v2.AddFile.URLSource.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.AddFile.URLSource} returns this
 */
proto.pfs_v2.AddFile.URLSource.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool recursive = 2;
 * @return {boolean}
 */
proto.pfs_v2.AddFile.URLSource.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.AddFile.URLSource} returns this
 */
proto.pfs_v2.AddFile.URLSource.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 concurrency = 3;
 * @return {number}
 */
proto.pfs_v2.AddFile.URLSource.prototype.getConcurrency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.AddFile.URLSource} returns this
 */
proto.pfs_v2.AddFile.URLSource.prototype.setConcurrency = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.pfs_v2.AddFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.AddFile} returns this
 */
proto.pfs_v2.AddFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datum = 2;
 * @return {string}
 */
proto.pfs_v2.AddFile.prototype.getDatum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.AddFile} returns this
 */
proto.pfs_v2.AddFile.prototype.setDatum = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.BytesValue raw = 3;
 * @return {?proto.google.protobuf.BytesValue}
 */
proto.pfs_v2.AddFile.prototype.getRaw = function() {
  return /** @type{?proto.google.protobuf.BytesValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BytesValue, 3));
};


/**
 * @param {?proto.google.protobuf.BytesValue|undefined} value
 * @return {!proto.pfs_v2.AddFile} returns this
*/
proto.pfs_v2.AddFile.prototype.setRaw = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs_v2.AddFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.AddFile} returns this
 */
proto.pfs_v2.AddFile.prototype.clearRaw = function() {
  return this.setRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.AddFile.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional URLSource url = 4;
 * @return {?proto.pfs_v2.AddFile.URLSource}
 */
proto.pfs_v2.AddFile.prototype.getUrl = function() {
  return /** @type{?proto.pfs_v2.AddFile.URLSource} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.AddFile.URLSource, 4));
};


/**
 * @param {?proto.pfs_v2.AddFile.URLSource|undefined} value
 * @return {!proto.pfs_v2.AddFile} returns this
*/
proto.pfs_v2.AddFile.prototype.setUrl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.pfs_v2.AddFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.AddFile} returns this
 */
proto.pfs_v2.AddFile.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.AddFile.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DeleteFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DeleteFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DeleteFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datum: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DeleteFile}
 */
proto.pfs_v2.DeleteFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DeleteFile;
  return proto.pfs_v2.DeleteFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DeleteFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DeleteFile}
 */
proto.pfs_v2.DeleteFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DeleteFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DeleteFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DeleteFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DeleteFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatum();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.pfs_v2.DeleteFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.DeleteFile} returns this
 */
proto.pfs_v2.DeleteFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datum = 2;
 * @return {string}
 */
proto.pfs_v2.DeleteFile.prototype.getDatum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.DeleteFile} returns this
 */
proto.pfs_v2.DeleteFile.prototype.setDatum = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CopyFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CopyFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CopyFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CopyFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    dst: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datum: jspb.Message.getFieldWithDefault(msg, 2, ""),
    src: (f = msg.getSrc()) && proto.pfs_v2.File.toObject(includeInstance, f),
    append: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CopyFile}
 */
proto.pfs_v2.CopyFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CopyFile;
  return proto.pfs_v2.CopyFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CopyFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CopyFile}
 */
proto.pfs_v2.CopyFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDst(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatum(value);
      break;
    case 3:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CopyFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CopyFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CopyFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CopyFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDst();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatum();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string dst = 1;
 * @return {string}
 */
proto.pfs_v2.CopyFile.prototype.getDst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CopyFile} returns this
 */
proto.pfs_v2.CopyFile.prototype.setDst = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string datum = 2;
 * @return {string}
 */
proto.pfs_v2.CopyFile.prototype.getDatum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CopyFile} returns this
 */
proto.pfs_v2.CopyFile.prototype.setDatum = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional File src = 3;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.CopyFile.prototype.getSrc = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 3));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.CopyFile} returns this
*/
proto.pfs_v2.CopyFile.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.CopyFile} returns this
 */
proto.pfs_v2.CopyFile.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.CopyFile.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool append = 4;
 * @return {boolean}
 */
proto.pfs_v2.CopyFile.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.CopyFile} returns this
 */
proto.pfs_v2.CopyFile.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.ModifyFileRequest.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.pfs_v2.ModifyFileRequest.BodyCase = {
  BODY_NOT_SET: 0,
  SET_COMMIT: 1,
  ADD_FILE: 2,
  DELETE_FILE: 3,
  COPY_FILE: 4
};

/**
 * @return {proto.pfs_v2.ModifyFileRequest.BodyCase}
 */
proto.pfs_v2.ModifyFileRequest.prototype.getBodyCase = function() {
  return /** @type {proto.pfs_v2.ModifyFileRequest.BodyCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.ModifyFileRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ModifyFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ModifyFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ModifyFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ModifyFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    setCommit: (f = msg.getSetCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    addFile: (f = msg.getAddFile()) && proto.pfs_v2.AddFile.toObject(includeInstance, f),
    deleteFile: (f = msg.getDeleteFile()) && proto.pfs_v2.DeleteFile.toObject(includeInstance, f),
    copyFile: (f = msg.getCopyFile()) && proto.pfs_v2.CopyFile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ModifyFileRequest}
 */
proto.pfs_v2.ModifyFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ModifyFileRequest;
  return proto.pfs_v2.ModifyFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ModifyFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ModifyFileRequest}
 */
proto.pfs_v2.ModifyFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setSetCommit(value);
      break;
    case 2:
      var value = new proto.pfs_v2.AddFile;
      reader.readMessage(value,proto.pfs_v2.AddFile.deserializeBinaryFromReader);
      msg.setAddFile(value);
      break;
    case 3:
      var value = new proto.pfs_v2.DeleteFile;
      reader.readMessage(value,proto.pfs_v2.DeleteFile.deserializeBinaryFromReader);
      msg.setDeleteFile(value);
      break;
    case 4:
      var value = new proto.pfs_v2.CopyFile;
      reader.readMessage(value,proto.pfs_v2.CopyFile.deserializeBinaryFromReader);
      msg.setCopyFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ModifyFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ModifyFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ModifyFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ModifyFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getAddFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.AddFile.serializeBinaryToWriter
    );
  }
  f = message.getDeleteFile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.DeleteFile.serializeBinaryToWriter
    );
  }
  f = message.getCopyFile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.CopyFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit set_commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.ModifyFileRequest.prototype.getSetCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
*/
proto.pfs_v2.ModifyFileRequest.prototype.setSetCommit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
 */
proto.pfs_v2.ModifyFileRequest.prototype.clearSetCommit = function() {
  return this.setSetCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ModifyFileRequest.prototype.hasSetCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AddFile add_file = 2;
 * @return {?proto.pfs_v2.AddFile}
 */
proto.pfs_v2.ModifyFileRequest.prototype.getAddFile = function() {
  return /** @type{?proto.pfs_v2.AddFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.AddFile, 2));
};


/**
 * @param {?proto.pfs_v2.AddFile|undefined} value
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
*/
proto.pfs_v2.ModifyFileRequest.prototype.setAddFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
 */
proto.pfs_v2.ModifyFileRequest.prototype.clearAddFile = function() {
  return this.setAddFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ModifyFileRequest.prototype.hasAddFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeleteFile delete_file = 3;
 * @return {?proto.pfs_v2.DeleteFile}
 */
proto.pfs_v2.ModifyFileRequest.prototype.getDeleteFile = function() {
  return /** @type{?proto.pfs_v2.DeleteFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.DeleteFile, 3));
};


/**
 * @param {?proto.pfs_v2.DeleteFile|undefined} value
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
*/
proto.pfs_v2.ModifyFileRequest.prototype.setDeleteFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs_v2.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
 */
proto.pfs_v2.ModifyFileRequest.prototype.clearDeleteFile = function() {
  return this.setDeleteFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ModifyFileRequest.prototype.hasDeleteFile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CopyFile copy_file = 4;
 * @return {?proto.pfs_v2.CopyFile}
 */
proto.pfs_v2.ModifyFileRequest.prototype.getCopyFile = function() {
  return /** @type{?proto.pfs_v2.CopyFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.CopyFile, 4));
};


/**
 * @param {?proto.pfs_v2.CopyFile|undefined} value
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
*/
proto.pfs_v2.ModifyFileRequest.prototype.setCopyFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.pfs_v2.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ModifyFileRequest} returns this
 */
proto.pfs_v2.ModifyFileRequest.prototype.clearCopyFile = function() {
  return this.setCopyFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ModifyFileRequest.prototype.hasCopyFile = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.GetFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.GetFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.GetFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pathRange: (f = msg.getPathRange()) && proto.pfs_v2.PathRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.GetFileRequest}
 */
proto.pfs_v2.GetFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.GetFileRequest;
  return proto.pfs_v2.GetFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.GetFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.GetFileRequest}
 */
proto.pfs_v2.GetFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 4:
      var value = new proto.pfs_v2.PathRange;
      reader.readMessage(value,proto.pfs_v2.PathRange.deserializeBinaryFromReader);
      msg.setPathRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.GetFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.GetFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.GetFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPathRange();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs_v2.PathRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.GetFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.GetFileRequest} returns this
*/
proto.pfs_v2.GetFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GetFileRequest} returns this
 */
proto.pfs_v2.GetFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GetFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string URL = 2;
 * @return {string}
 */
proto.pfs_v2.GetFileRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.GetFileRequest} returns this
 */
proto.pfs_v2.GetFileRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.pfs_v2.GetFileRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.GetFileRequest} returns this
 */
proto.pfs_v2.GetFileRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional PathRange path_range = 4;
 * @return {?proto.pfs_v2.PathRange}
 */
proto.pfs_v2.GetFileRequest.prototype.getPathRange = function() {
  return /** @type{?proto.pfs_v2.PathRange} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.PathRange, 4));
};


/**
 * @param {?proto.pfs_v2.PathRange|undefined} value
 * @return {!proto.pfs_v2.GetFileRequest} returns this
*/
proto.pfs_v2.GetFileRequest.prototype.setPathRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GetFileRequest} returns this
 */
proto.pfs_v2.GetFileRequest.prototype.clearPathRange = function() {
  return this.setPathRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GetFileRequest.prototype.hasPathRange = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.InspectFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.InspectFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.InspectFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs_v2.File.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.InspectFileRequest}
 */
proto.pfs_v2.InspectFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.InspectFileRequest;
  return proto.pfs_v2.InspectFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.InspectFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.InspectFileRequest}
 */
proto.pfs_v2.InspectFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.InspectFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.InspectFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.InspectFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.InspectFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.InspectFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.InspectFileRequest} returns this
*/
proto.pfs_v2.InspectFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.InspectFileRequest} returns this
 */
proto.pfs_v2.InspectFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.InspectFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ListFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ListFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ListFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    paginationmarker: (f = msg.getPaginationmarker()) && proto.pfs_v2.File.toObject(includeInstance, f),
    number: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ListFileRequest}
 */
proto.pfs_v2.ListFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ListFileRequest;
  return proto.pfs_v2.ListFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ListFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ListFileRequest}
 */
proto.pfs_v2.ListFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 3:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setPaginationmarker(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ListFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ListFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ListFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ListFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getPaginationmarker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.ListFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.ListFileRequest} returns this
*/
proto.pfs_v2.ListFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListFileRequest} returns this
 */
proto.pfs_v2.ListFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional File paginationMarker = 3;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.ListFileRequest.prototype.getPaginationmarker = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 3));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.ListFileRequest} returns this
*/
proto.pfs_v2.ListFileRequest.prototype.setPaginationmarker = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ListFileRequest} returns this
 */
proto.pfs_v2.ListFileRequest.prototype.clearPaginationmarker = function() {
  return this.setPaginationmarker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ListFileRequest.prototype.hasPaginationmarker = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 number = 4;
 * @return {number}
 */
proto.pfs_v2.ListFileRequest.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ListFileRequest} returns this
 */
proto.pfs_v2.ListFileRequest.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool reverse = 5;
 * @return {boolean}
 */
proto.pfs_v2.ListFileRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.ListFileRequest} returns this
 */
proto.pfs_v2.ListFileRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.WalkFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.WalkFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.WalkFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    paginationmarker: (f = msg.getPaginationmarker()) && proto.pfs_v2.File.toObject(includeInstance, f),
    number: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.WalkFileRequest}
 */
proto.pfs_v2.WalkFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.WalkFileRequest;
  return proto.pfs_v2.WalkFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.WalkFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.WalkFileRequest}
 */
proto.pfs_v2.WalkFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setPaginationmarker(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.WalkFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.WalkFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.WalkFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.WalkFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getPaginationmarker();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.WalkFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
*/
proto.pfs_v2.WalkFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
 */
proto.pfs_v2.WalkFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.WalkFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional File paginationMarker = 2;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.WalkFileRequest.prototype.getPaginationmarker = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 2));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
*/
proto.pfs_v2.WalkFileRequest.prototype.setPaginationmarker = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
 */
proto.pfs_v2.WalkFileRequest.prototype.clearPaginationmarker = function() {
  return this.setPaginationmarker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.WalkFileRequest.prototype.hasPaginationmarker = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 number = 3;
 * @return {number}
 */
proto.pfs_v2.WalkFileRequest.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
 */
proto.pfs_v2.WalkFileRequest.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool reverse = 4;
 * @return {boolean}
 */
proto.pfs_v2.WalkFileRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.WalkFileRequest} returns this
 */
proto.pfs_v2.WalkFileRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.GlobFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.GlobFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.GlobFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GlobFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    pattern: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pathRange: (f = msg.getPathRange()) && proto.pfs_v2.PathRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.GlobFileRequest}
 */
proto.pfs_v2.GlobFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.GlobFileRequest;
  return proto.pfs_v2.GlobFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.GlobFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.GlobFileRequest}
 */
proto.pfs_v2.GlobFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPattern(value);
      break;
    case 3:
      var value = new proto.pfs_v2.PathRange;
      reader.readMessage(value,proto.pfs_v2.PathRange.deserializeBinaryFromReader);
      msg.setPathRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.GlobFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.GlobFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.GlobFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GlobFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPathRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.PathRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.GlobFileRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.GlobFileRequest} returns this
*/
proto.pfs_v2.GlobFileRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GlobFileRequest} returns this
 */
proto.pfs_v2.GlobFileRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GlobFileRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pattern = 2;
 * @return {string}
 */
proto.pfs_v2.GlobFileRequest.prototype.getPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.GlobFileRequest} returns this
 */
proto.pfs_v2.GlobFileRequest.prototype.setPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PathRange path_range = 3;
 * @return {?proto.pfs_v2.PathRange}
 */
proto.pfs_v2.GlobFileRequest.prototype.getPathRange = function() {
  return /** @type{?proto.pfs_v2.PathRange} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.PathRange, 3));
};


/**
 * @param {?proto.pfs_v2.PathRange|undefined} value
 * @return {!proto.pfs_v2.GlobFileRequest} returns this
*/
proto.pfs_v2.GlobFileRequest.prototype.setPathRange = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GlobFileRequest} returns this
 */
proto.pfs_v2.GlobFileRequest.prototype.clearPathRange = function() {
  return this.setPathRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GlobFileRequest.prototype.hasPathRange = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DiffFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DiffFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DiffFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DiffFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    newFile: (f = msg.getNewFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    oldFile: (f = msg.getOldFile()) && proto.pfs_v2.File.toObject(includeInstance, f),
    shallow: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DiffFileRequest}
 */
proto.pfs_v2.DiffFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DiffFileRequest;
  return proto.pfs_v2.DiffFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DiffFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DiffFileRequest}
 */
proto.pfs_v2.DiffFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setNewFile(value);
      break;
    case 2:
      var value = new proto.pfs_v2.File;
      reader.readMessage(value,proto.pfs_v2.File.deserializeBinaryFromReader);
      msg.setOldFile(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShallow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DiffFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DiffFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DiffFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DiffFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getOldFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.File.serializeBinaryToWriter
    );
  }
  f = message.getShallow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional File new_file = 1;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.DiffFileRequest.prototype.getNewFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 1));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.DiffFileRequest} returns this
*/
proto.pfs_v2.DiffFileRequest.prototype.setNewFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DiffFileRequest} returns this
 */
proto.pfs_v2.DiffFileRequest.prototype.clearNewFile = function() {
  return this.setNewFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DiffFileRequest.prototype.hasNewFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional File old_file = 2;
 * @return {?proto.pfs_v2.File}
 */
proto.pfs_v2.DiffFileRequest.prototype.getOldFile = function() {
  return /** @type{?proto.pfs_v2.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.File, 2));
};


/**
 * @param {?proto.pfs_v2.File|undefined} value
 * @return {!proto.pfs_v2.DiffFileRequest} returns this
*/
proto.pfs_v2.DiffFileRequest.prototype.setOldFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DiffFileRequest} returns this
 */
proto.pfs_v2.DiffFileRequest.prototype.clearOldFile = function() {
  return this.setOldFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DiffFileRequest.prototype.hasOldFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool shallow = 3;
 * @return {boolean}
 */
proto.pfs_v2.DiffFileRequest.prototype.getShallow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.DiffFileRequest} returns this
 */
proto.pfs_v2.DiffFileRequest.prototype.setShallow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.DiffFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.DiffFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.DiffFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DiffFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    newFile: (f = msg.getNewFile()) && proto.pfs_v2.FileInfo.toObject(includeInstance, f),
    oldFile: (f = msg.getOldFile()) && proto.pfs_v2.FileInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.DiffFileResponse}
 */
proto.pfs_v2.DiffFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.DiffFileResponse;
  return proto.pfs_v2.DiffFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.DiffFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.DiffFileResponse}
 */
proto.pfs_v2.DiffFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.FileInfo;
      reader.readMessage(value,proto.pfs_v2.FileInfo.deserializeBinaryFromReader);
      msg.setNewFile(value);
      break;
    case 2:
      var value = new proto.pfs_v2.FileInfo;
      reader.readMessage(value,proto.pfs_v2.FileInfo.deserializeBinaryFromReader);
      msg.setOldFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.DiffFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.DiffFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.DiffFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.DiffFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.FileInfo.serializeBinaryToWriter
    );
  }
  f = message.getOldFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.FileInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileInfo new_file = 1;
 * @return {?proto.pfs_v2.FileInfo}
 */
proto.pfs_v2.DiffFileResponse.prototype.getNewFile = function() {
  return /** @type{?proto.pfs_v2.FileInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.FileInfo, 1));
};


/**
 * @param {?proto.pfs_v2.FileInfo|undefined} value
 * @return {!proto.pfs_v2.DiffFileResponse} returns this
*/
proto.pfs_v2.DiffFileResponse.prototype.setNewFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DiffFileResponse} returns this
 */
proto.pfs_v2.DiffFileResponse.prototype.clearNewFile = function() {
  return this.setNewFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DiffFileResponse.prototype.hasNewFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileInfo old_file = 2;
 * @return {?proto.pfs_v2.FileInfo}
 */
proto.pfs_v2.DiffFileResponse.prototype.getOldFile = function() {
  return /** @type{?proto.pfs_v2.FileInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.FileInfo, 2));
};


/**
 * @param {?proto.pfs_v2.FileInfo|undefined} value
 * @return {!proto.pfs_v2.DiffFileResponse} returns this
*/
proto.pfs_v2.DiffFileResponse.prototype.setOldFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.DiffFileResponse} returns this
 */
proto.pfs_v2.DiffFileResponse.prototype.clearOldFile = function() {
  return this.setOldFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.DiffFileResponse.prototype.hasOldFile = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.FsckRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.pfs_v2.FsckRequest.ZombieCheckCase = {
  ZOMBIE_CHECK_NOT_SET: 0,
  ZOMBIE_TARGET: 2,
  ZOMBIE_ALL: 3
};

/**
 * @return {proto.pfs_v2.FsckRequest.ZombieCheckCase}
 */
proto.pfs_v2.FsckRequest.prototype.getZombieCheckCase = function() {
  return /** @type {proto.pfs_v2.FsckRequest.ZombieCheckCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.FsckRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FsckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FsckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FsckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FsckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fix: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    zombieTarget: (f = msg.getZombieTarget()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    zombieAll: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FsckRequest}
 */
proto.pfs_v2.FsckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FsckRequest;
  return proto.pfs_v2.FsckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FsckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FsckRequest}
 */
proto.pfs_v2.FsckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFix(value);
      break;
    case 2:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setZombieTarget(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setZombieAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FsckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FsckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FsckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FsckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFix();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getZombieTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool fix = 1;
 * @return {boolean}
 */
proto.pfs_v2.FsckRequest.prototype.getFix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.FsckRequest} returns this
 */
proto.pfs_v2.FsckRequest.prototype.setFix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Commit zombie_target = 2;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.FsckRequest.prototype.getZombieTarget = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 2));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.FsckRequest} returns this
*/
proto.pfs_v2.FsckRequest.prototype.setZombieTarget = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.FsckRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.FsckRequest} returns this
 */
proto.pfs_v2.FsckRequest.prototype.clearZombieTarget = function() {
  return this.setZombieTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FsckRequest.prototype.hasZombieTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool zombie_all = 3;
 * @return {boolean}
 */
proto.pfs_v2.FsckRequest.prototype.getZombieAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.FsckRequest} returns this
 */
proto.pfs_v2.FsckRequest.prototype.setZombieAll = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.pfs_v2.FsckRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pfs_v2.FsckRequest} returns this
 */
proto.pfs_v2.FsckRequest.prototype.clearZombieAll = function() {
  return jspb.Message.setOneofField(this, 3, proto.pfs_v2.FsckRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.FsckRequest.prototype.hasZombieAll = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.FsckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.FsckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.FsckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FsckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.FsckResponse}
 */
proto.pfs_v2.FsckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.FsckResponse;
  return proto.pfs_v2.FsckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.FsckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.FsckResponse}
 */
proto.pfs_v2.FsckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.FsckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.FsckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.FsckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.FsckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string fix = 1;
 * @return {string}
 */
proto.pfs_v2.FsckResponse.prototype.getFix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.FsckResponse} returns this
 */
proto.pfs_v2.FsckResponse.prototype.setFix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.pfs_v2.FsckResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.FsckResponse} returns this
 */
proto.pfs_v2.FsckResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CreateFileSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CreateFileSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CreateFileSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateFileSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSetId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CreateFileSetResponse}
 */
proto.pfs_v2.CreateFileSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CreateFileSetResponse;
  return proto.pfs_v2.CreateFileSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CreateFileSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CreateFileSetResponse}
 */
proto.pfs_v2.CreateFileSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CreateFileSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CreateFileSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CreateFileSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CreateFileSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string file_set_id = 1;
 * @return {string}
 */
proto.pfs_v2.CreateFileSetResponse.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.CreateFileSetResponse} returns this
 */
proto.pfs_v2.CreateFileSetResponse.prototype.setFileSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.GetFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.GetFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.GetFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.GetFileSetRequest}
 */
proto.pfs_v2.GetFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.GetFileSetRequest;
  return proto.pfs_v2.GetFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.GetFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.GetFileSetRequest}
 */
proto.pfs_v2.GetFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {!proto.pfs_v2.GetFileSetRequest.FileSetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.GetFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.GetFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.GetFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pfs_v2.GetFileSetRequest.FileSetType = {
  TOTAL: 0,
  DIFF: 1
};

/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.GetFileSetRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.GetFileSetRequest} returns this
*/
proto.pfs_v2.GetFileSetRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GetFileSetRequest} returns this
 */
proto.pfs_v2.GetFileSetRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GetFileSetRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileSetType type = 2;
 * @return {!proto.pfs_v2.GetFileSetRequest.FileSetType}
 */
proto.pfs_v2.GetFileSetRequest.prototype.getType = function() {
  return /** @type {!proto.pfs_v2.GetFileSetRequest.FileSetType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pfs_v2.GetFileSetRequest.FileSetType} value
 * @return {!proto.pfs_v2.GetFileSetRequest} returns this
 */
proto.pfs_v2.GetFileSetRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.AddFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.AddFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.AddFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    fileSetId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.AddFileSetRequest}
 */
proto.pfs_v2.AddFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.AddFileSetRequest;
  return proto.pfs_v2.AddFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.AddFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.AddFileSetRequest}
 */
proto.pfs_v2.AddFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.AddFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.AddFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.AddFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.AddFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.AddFileSetRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.AddFileSetRequest} returns this
*/
proto.pfs_v2.AddFileSetRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.AddFileSetRequest} returns this
 */
proto.pfs_v2.AddFileSetRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.AddFileSetRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string file_set_id = 2;
 * @return {string}
 */
proto.pfs_v2.AddFileSetRequest.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.AddFileSetRequest} returns this
 */
proto.pfs_v2.AddFileSetRequest.prototype.setFileSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.RenewFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.RenewFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.RenewFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RenewFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttlSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.RenewFileSetRequest}
 */
proto.pfs_v2.RenewFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.RenewFileSetRequest;
  return proto.pfs_v2.RenewFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.RenewFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.RenewFileSetRequest}
 */
proto.pfs_v2.RenewFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtlSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.RenewFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.RenewFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.RenewFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.RenewFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtlSeconds();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string file_set_id = 1;
 * @return {string}
 */
proto.pfs_v2.RenewFileSetRequest.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.RenewFileSetRequest} returns this
 */
proto.pfs_v2.RenewFileSetRequest.prototype.setFileSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl_seconds = 2;
 * @return {number}
 */
proto.pfs_v2.RenewFileSetRequest.prototype.getTtlSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.RenewFileSetRequest} returns this
 */
proto.pfs_v2.RenewFileSetRequest.prototype.setTtlSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.ComposeFileSetRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ComposeFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ComposeFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ComposeFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSetIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    ttlSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    compact: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ComposeFileSetRequest}
 */
proto.pfs_v2.ComposeFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ComposeFileSetRequest;
  return proto.pfs_v2.ComposeFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ComposeFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ComposeFileSetRequest}
 */
proto.pfs_v2.ComposeFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileSetIds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtlSeconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ComposeFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ComposeFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ComposeFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTtlSeconds();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCompact();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated string file_set_ids = 1;
 * @return {!Array<string>}
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.getFileSetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pfs_v2.ComposeFileSetRequest} returns this
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.setFileSetIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.ComposeFileSetRequest} returns this
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.addFileSetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.ComposeFileSetRequest} returns this
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.clearFileSetIdsList = function() {
  return this.setFileSetIdsList([]);
};


/**
 * optional int64 ttl_seconds = 2;
 * @return {number}
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.getTtlSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ComposeFileSetRequest} returns this
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.setTtlSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool compact = 3;
 * @return {boolean}
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.getCompact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.ComposeFileSetRequest} returns this
 */
proto.pfs_v2.ComposeFileSetRequest.prototype.setCompact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ShardFileSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ShardFileSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ShardFileSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ShardFileSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numFiles: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ShardFileSetRequest}
 */
proto.pfs_v2.ShardFileSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ShardFileSetRequest;
  return proto.pfs_v2.ShardFileSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ShardFileSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ShardFileSetRequest}
 */
proto.pfs_v2.ShardFileSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileSetId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumFiles(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ShardFileSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ShardFileSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ShardFileSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ShardFileSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumFiles();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string file_set_id = 1;
 * @return {string}
 */
proto.pfs_v2.ShardFileSetRequest.prototype.getFileSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ShardFileSetRequest} returns this
 */
proto.pfs_v2.ShardFileSetRequest.prototype.setFileSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 num_files = 2;
 * @return {number}
 */
proto.pfs_v2.ShardFileSetRequest.prototype.getNumFiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ShardFileSetRequest} returns this
 */
proto.pfs_v2.ShardFileSetRequest.prototype.setNumFiles = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 size_bytes = 3;
 * @return {number}
 */
proto.pfs_v2.ShardFileSetRequest.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ShardFileSetRequest} returns this
 */
proto.pfs_v2.ShardFileSetRequest.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.PathRange.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.PathRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.PathRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.PathRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    lower: jspb.Message.getFieldWithDefault(msg, 1, ""),
    upper: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.PathRange}
 */
proto.pfs_v2.PathRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.PathRange;
  return proto.pfs_v2.PathRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.PathRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.PathRange}
 */
proto.pfs_v2.PathRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLower(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpper(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.PathRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.PathRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.PathRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.PathRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLower();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpper();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string lower = 1;
 * @return {string}
 */
proto.pfs_v2.PathRange.prototype.getLower = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.PathRange} returns this
 */
proto.pfs_v2.PathRange.prototype.setLower = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string upper = 2;
 * @return {string}
 */
proto.pfs_v2.PathRange.prototype.getUpper = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.PathRange} returns this
 */
proto.pfs_v2.PathRange.prototype.setUpper = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.ShardFileSetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ShardFileSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ShardFileSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ShardFileSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ShardFileSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shardsList: jspb.Message.toObjectList(msg.getShardsList(),
    proto.pfs_v2.PathRange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ShardFileSetResponse}
 */
proto.pfs_v2.ShardFileSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ShardFileSetResponse;
  return proto.pfs_v2.ShardFileSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ShardFileSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ShardFileSetResponse}
 */
proto.pfs_v2.ShardFileSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.PathRange;
      reader.readMessage(value,proto.pfs_v2.PathRange.deserializeBinaryFromReader);
      msg.addShards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ShardFileSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ShardFileSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ShardFileSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ShardFileSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.PathRange.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PathRange shards = 1;
 * @return {!Array<!proto.pfs_v2.PathRange>}
 */
proto.pfs_v2.ShardFileSetResponse.prototype.getShardsList = function() {
  return /** @type{!Array<!proto.pfs_v2.PathRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.PathRange, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.PathRange>} value
 * @return {!proto.pfs_v2.ShardFileSetResponse} returns this
*/
proto.pfs_v2.ShardFileSetResponse.prototype.setShardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.PathRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.PathRange}
 */
proto.pfs_v2.ShardFileSetResponse.prototype.addShards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.PathRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.ShardFileSetResponse} returns this
 */
proto.pfs_v2.ShardFileSetResponse.prototype.clearShardsList = function() {
  return this.setShardsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CheckStorageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CheckStorageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CheckStorageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CheckStorageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    readChunkData: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    chunkBegin: msg.getChunkBegin_asB64(),
    chunkEnd: msg.getChunkEnd_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CheckStorageRequest}
 */
proto.pfs_v2.CheckStorageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CheckStorageRequest;
  return proto.pfs_v2.CheckStorageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CheckStorageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CheckStorageRequest}
 */
proto.pfs_v2.CheckStorageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadChunkData(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunkBegin(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunkEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CheckStorageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CheckStorageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CheckStorageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CheckStorageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReadChunkData();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChunkBegin_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getChunkEnd_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bool read_chunk_data = 1;
 * @return {boolean}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getReadChunkData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs_v2.CheckStorageRequest} returns this
 */
proto.pfs_v2.CheckStorageRequest.prototype.setReadChunkData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bytes chunk_begin = 2;
 * @return {string}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkBegin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk_begin = 2;
 * This is a type-conversion wrapper around `getChunkBegin()`
 * @return {string}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkBegin_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunkBegin()));
};


/**
 * optional bytes chunk_begin = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunkBegin()`
 * @return {!Uint8Array}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkBegin_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunkBegin()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs_v2.CheckStorageRequest} returns this
 */
proto.pfs_v2.CheckStorageRequest.prototype.setChunkBegin = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes chunk_end = 3;
 * @return {string}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkEnd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes chunk_end = 3;
 * This is a type-conversion wrapper around `getChunkEnd()`
 * @return {string}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkEnd_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunkEnd()));
};


/**
 * optional bytes chunk_end = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunkEnd()`
 * @return {!Uint8Array}
 */
proto.pfs_v2.CheckStorageRequest.prototype.getChunkEnd_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunkEnd()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs_v2.CheckStorageRequest} returns this
 */
proto.pfs_v2.CheckStorageRequest.prototype.setChunkEnd = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.CheckStorageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.CheckStorageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.CheckStorageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CheckStorageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunkObjectCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.CheckStorageResponse}
 */
proto.pfs_v2.CheckStorageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.CheckStorageResponse;
  return proto.pfs_v2.CheckStorageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.CheckStorageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.CheckStorageResponse}
 */
proto.pfs_v2.CheckStorageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setChunkObjectCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.CheckStorageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.CheckStorageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.CheckStorageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.CheckStorageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunkObjectCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 chunk_object_count = 1;
 * @return {number}
 */
proto.pfs_v2.CheckStorageResponse.prototype.getChunkObjectCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.CheckStorageResponse} returns this
 */
proto.pfs_v2.CheckStorageResponse.prototype.setChunkObjectCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.PutCacheRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.PutCacheRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.PutCacheRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.PutCacheRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.PutCacheRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    fileSetIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    tag: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.PutCacheRequest}
 */
proto.pfs_v2.PutCacheRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.PutCacheRequest;
  return proto.pfs_v2.PutCacheRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.PutCacheRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.PutCacheRequest}
 */
proto.pfs_v2.PutCacheRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileSetIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.PutCacheRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.PutCacheRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.PutCacheRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.PutCacheRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getFileSetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.pfs_v2.PutCacheRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any value = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.pfs_v2.PutCacheRequest.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
*/
proto.pfs_v2.PutCacheRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.PutCacheRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string file_set_ids = 3;
 * @return {!Array<string>}
 */
proto.pfs_v2.PutCacheRequest.prototype.getFileSetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.setFileSetIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.addFileSetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.clearFileSetIdsList = function() {
  return this.setFileSetIdsList([]);
};


/**
 * optional string tag = 4;
 * @return {string}
 */
proto.pfs_v2.PutCacheRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.PutCacheRequest} returns this
 */
proto.pfs_v2.PutCacheRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.GetCacheRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.GetCacheRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.GetCacheRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetCacheRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.GetCacheRequest}
 */
proto.pfs_v2.GetCacheRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.GetCacheRequest;
  return proto.pfs_v2.GetCacheRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.GetCacheRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.GetCacheRequest}
 */
proto.pfs_v2.GetCacheRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.GetCacheRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.GetCacheRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.GetCacheRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetCacheRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.pfs_v2.GetCacheRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.GetCacheRequest} returns this
 */
proto.pfs_v2.GetCacheRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.GetCacheResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.GetCacheResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.GetCacheResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetCacheResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.GetCacheResponse}
 */
proto.pfs_v2.GetCacheResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.GetCacheResponse;
  return proto.pfs_v2.GetCacheResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.GetCacheResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.GetCacheResponse}
 */
proto.pfs_v2.GetCacheResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.GetCacheResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.GetCacheResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.GetCacheResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.GetCacheResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any value = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.pfs_v2.GetCacheResponse.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.pfs_v2.GetCacheResponse} returns this
*/
proto.pfs_v2.GetCacheResponse.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.GetCacheResponse} returns this
 */
proto.pfs_v2.GetCacheResponse.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.GetCacheResponse.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ClearCacheRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ClearCacheRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ClearCacheRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ClearCacheRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagPrefix: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ClearCacheRequest}
 */
proto.pfs_v2.ClearCacheRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ClearCacheRequest;
  return proto.pfs_v2.ClearCacheRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ClearCacheRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ClearCacheRequest}
 */
proto.pfs_v2.ClearCacheRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ClearCacheRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ClearCacheRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ClearCacheRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ClearCacheRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tag_prefix = 1;
 * @return {string}
 */
proto.pfs_v2.ClearCacheRequest.prototype.getTagPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ClearCacheRequest} returns this
 */
proto.pfs_v2.ClearCacheRequest.prototype.setTagPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ActivateAuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ActivateAuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ActivateAuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ActivateAuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ActivateAuthRequest}
 */
proto.pfs_v2.ActivateAuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ActivateAuthRequest;
  return proto.pfs_v2.ActivateAuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ActivateAuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ActivateAuthRequest}
 */
proto.pfs_v2.ActivateAuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ActivateAuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ActivateAuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ActivateAuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ActivateAuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ActivateAuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ActivateAuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ActivateAuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ActivateAuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ActivateAuthResponse}
 */
proto.pfs_v2.ActivateAuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ActivateAuthResponse;
  return proto.pfs_v2.ActivateAuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ActivateAuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ActivateAuthResponse}
 */
proto.pfs_v2.ActivateAuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ActivateAuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ActivateAuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ActivateAuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ActivateAuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ObjectStorageEgress.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ObjectStorageEgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ObjectStorageEgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ObjectStorageEgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ObjectStorageEgress}
 */
proto.pfs_v2.ObjectStorageEgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ObjectStorageEgress;
  return proto.pfs_v2.ObjectStorageEgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ObjectStorageEgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ObjectStorageEgress}
 */
proto.pfs_v2.ObjectStorageEgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ObjectStorageEgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ObjectStorageEgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ObjectStorageEgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ObjectStorageEgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.pfs_v2.ObjectStorageEgress.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.ObjectStorageEgress} returns this
 */
proto.pfs_v2.ObjectStorageEgress.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SQLDatabaseEgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SQLDatabaseEgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileFormat: (f = msg.getFileFormat()) && proto.pfs_v2.SQLDatabaseEgress.FileFormat.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && proto.pfs_v2.SQLDatabaseEgress.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SQLDatabaseEgress}
 */
proto.pfs_v2.SQLDatabaseEgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SQLDatabaseEgress;
  return proto.pfs_v2.SQLDatabaseEgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SQLDatabaseEgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SQLDatabaseEgress}
 */
proto.pfs_v2.SQLDatabaseEgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = new proto.pfs_v2.SQLDatabaseEgress.FileFormat;
      reader.readMessage(value,proto.pfs_v2.SQLDatabaseEgress.FileFormat.deserializeBinaryFromReader);
      msg.setFileFormat(value);
      break;
    case 3:
      var value = new proto.pfs_v2.SQLDatabaseEgress.Secret;
      reader.readMessage(value,proto.pfs_v2.SQLDatabaseEgress.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SQLDatabaseEgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SQLDatabaseEgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileFormat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.SQLDatabaseEgress.FileFormat.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.SQLDatabaseEgress.Secret.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SQLDatabaseEgress.FileFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    columnsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SQLDatabaseEgress.FileFormat;
  return proto.pfs_v2.SQLDatabaseEgress.FileFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SQLDatabaseEgress.FileFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type = {
  UNKNOWN: 0,
  CSV: 1,
  JSON: 2,
  PARQUET: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.getType = function() {
  return /** @type {!proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pfs_v2.SQLDatabaseEgress.FileFormat.Type} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string columns = 2;
 * @return {!Array<string>}
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.SQLDatabaseEgress.FileFormat} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.FileFormat.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.SQLDatabaseEgress.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.SQLDatabaseEgress.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.SQLDatabaseEgress.Secret}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.SQLDatabaseEgress.Secret;
  return proto.pfs_v2.SQLDatabaseEgress.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.SQLDatabaseEgress.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.SQLDatabaseEgress.Secret}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.SQLDatabaseEgress.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.SQLDatabaseEgress.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress.Secret} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress.Secret} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.Secret.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FileFormat file_format = 2;
 * @return {?proto.pfs_v2.SQLDatabaseEgress.FileFormat}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.getFileFormat = function() {
  return /** @type{?proto.pfs_v2.SQLDatabaseEgress.FileFormat} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.SQLDatabaseEgress.FileFormat, 2));
};


/**
 * @param {?proto.pfs_v2.SQLDatabaseEgress.FileFormat|undefined} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress} returns this
*/
proto.pfs_v2.SQLDatabaseEgress.prototype.setFileFormat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SQLDatabaseEgress} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.clearFileFormat = function() {
  return this.setFileFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.hasFileFormat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Secret secret = 3;
 * @return {?proto.pfs_v2.SQLDatabaseEgress.Secret}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.getSecret = function() {
  return /** @type{?proto.pfs_v2.SQLDatabaseEgress.Secret} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.SQLDatabaseEgress.Secret, 3));
};


/**
 * @param {?proto.pfs_v2.SQLDatabaseEgress.Secret|undefined} value
 * @return {!proto.pfs_v2.SQLDatabaseEgress} returns this
*/
proto.pfs_v2.SQLDatabaseEgress.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.SQLDatabaseEgress} returns this
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.SQLDatabaseEgress.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.EgressRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.pfs_v2.EgressRequest.TargetCase = {
  TARGET_NOT_SET: 0,
  OBJECT_STORAGE: 2,
  SQL_DATABASE: 3
};

/**
 * @return {proto.pfs_v2.EgressRequest.TargetCase}
 */
proto.pfs_v2.EgressRequest.prototype.getTargetCase = function() {
  return /** @type {proto.pfs_v2.EgressRequest.TargetCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.EgressRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.EgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.EgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.EgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs_v2.Commit.toObject(includeInstance, f),
    objectStorage: (f = msg.getObjectStorage()) && proto.pfs_v2.ObjectStorageEgress.toObject(includeInstance, f),
    sqlDatabase: (f = msg.getSqlDatabase()) && proto.pfs_v2.SQLDatabaseEgress.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.EgressRequest}
 */
proto.pfs_v2.EgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.EgressRequest;
  return proto.pfs_v2.EgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.EgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.EgressRequest}
 */
proto.pfs_v2.EgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Commit;
      reader.readMessage(value,proto.pfs_v2.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = new proto.pfs_v2.ObjectStorageEgress;
      reader.readMessage(value,proto.pfs_v2.ObjectStorageEgress.deserializeBinaryFromReader);
      msg.setObjectStorage(value);
      break;
    case 3:
      var value = new proto.pfs_v2.SQLDatabaseEgress;
      reader.readMessage(value,proto.pfs_v2.SQLDatabaseEgress.deserializeBinaryFromReader);
      msg.setSqlDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.EgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.EgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.EgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Commit.serializeBinaryToWriter
    );
  }
  f = message.getObjectStorage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.ObjectStorageEgress.serializeBinaryToWriter
    );
  }
  f = message.getSqlDatabase();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs_v2.SQLDatabaseEgress.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs_v2.Commit}
 */
proto.pfs_v2.EgressRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs_v2.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Commit, 1));
};


/**
 * @param {?proto.pfs_v2.Commit|undefined} value
 * @return {!proto.pfs_v2.EgressRequest} returns this
*/
proto.pfs_v2.EgressRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.EgressRequest} returns this
 */
proto.pfs_v2.EgressRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.EgressRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ObjectStorageEgress object_storage = 2;
 * @return {?proto.pfs_v2.ObjectStorageEgress}
 */
proto.pfs_v2.EgressRequest.prototype.getObjectStorage = function() {
  return /** @type{?proto.pfs_v2.ObjectStorageEgress} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.ObjectStorageEgress, 2));
};


/**
 * @param {?proto.pfs_v2.ObjectStorageEgress|undefined} value
 * @return {!proto.pfs_v2.EgressRequest} returns this
*/
proto.pfs_v2.EgressRequest.prototype.setObjectStorage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.EgressRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.EgressRequest} returns this
 */
proto.pfs_v2.EgressRequest.prototype.clearObjectStorage = function() {
  return this.setObjectStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.EgressRequest.prototype.hasObjectStorage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SQLDatabaseEgress sql_database = 3;
 * @return {?proto.pfs_v2.SQLDatabaseEgress}
 */
proto.pfs_v2.EgressRequest.prototype.getSqlDatabase = function() {
  return /** @type{?proto.pfs_v2.SQLDatabaseEgress} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.SQLDatabaseEgress, 3));
};


/**
 * @param {?proto.pfs_v2.SQLDatabaseEgress|undefined} value
 * @return {!proto.pfs_v2.EgressRequest} returns this
*/
proto.pfs_v2.EgressRequest.prototype.setSqlDatabase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs_v2.EgressRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.EgressRequest} returns this
 */
proto.pfs_v2.EgressRequest.prototype.clearSqlDatabase = function() {
  return this.setSqlDatabase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.EgressRequest.prototype.hasSqlDatabase = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs_v2.EgressResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.pfs_v2.EgressResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OBJECT_STORAGE: 1,
  SQL_DATABASE: 2
};

/**
 * @return {proto.pfs_v2.EgressResponse.ResultCase}
 */
proto.pfs_v2.EgressResponse.prototype.getResultCase = function() {
  return /** @type {proto.pfs_v2.EgressResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.pfs_v2.EgressResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.EgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.EgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.EgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectStorage: (f = msg.getObjectStorage()) && proto.pfs_v2.EgressResponse.ObjectStorageResult.toObject(includeInstance, f),
    sqlDatabase: (f = msg.getSqlDatabase()) && proto.pfs_v2.EgressResponse.SQLDatabaseResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.EgressResponse}
 */
proto.pfs_v2.EgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.EgressResponse;
  return proto.pfs_v2.EgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.EgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.EgressResponse}
 */
proto.pfs_v2.EgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.EgressResponse.ObjectStorageResult;
      reader.readMessage(value,proto.pfs_v2.EgressResponse.ObjectStorageResult.deserializeBinaryFromReader);
      msg.setObjectStorage(value);
      break;
    case 2:
      var value = new proto.pfs_v2.EgressResponse.SQLDatabaseResult;
      reader.readMessage(value,proto.pfs_v2.EgressResponse.SQLDatabaseResult.deserializeBinaryFromReader);
      msg.setSqlDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.EgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.EgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.EgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectStorage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.EgressResponse.ObjectStorageResult.serializeBinaryToWriter
    );
  }
  f = message.getSqlDatabase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs_v2.EgressResponse.SQLDatabaseResult.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.EgressResponse.ObjectStorageResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.EgressResponse.ObjectStorageResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    bytesWritten: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.EgressResponse.ObjectStorageResult}
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.EgressResponse.ObjectStorageResult;
  return proto.pfs_v2.EgressResponse.ObjectStorageResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.EgressResponse.ObjectStorageResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.EgressResponse.ObjectStorageResult}
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBytesWritten(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.EgressResponse.ObjectStorageResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.EgressResponse.ObjectStorageResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBytesWritten();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 bytes_written = 1;
 * @return {number}
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.prototype.getBytesWritten = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.EgressResponse.ObjectStorageResult} returns this
 */
proto.pfs_v2.EgressResponse.ObjectStorageResult.prototype.setBytesWritten = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.EgressResponse.SQLDatabaseResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.EgressResponse.SQLDatabaseResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowsWrittenMap: (f = msg.getRowsWrittenMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.EgressResponse.SQLDatabaseResult}
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.EgressResponse.SQLDatabaseResult;
  return proto.pfs_v2.EgressResponse.SQLDatabaseResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.EgressResponse.SQLDatabaseResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.EgressResponse.SQLDatabaseResult}
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getRowsWrittenMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.EgressResponse.SQLDatabaseResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.EgressResponse.SQLDatabaseResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRowsWrittenMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * map<string, int64> rows_written = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.prototype.getRowsWrittenMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.pfs_v2.EgressResponse.SQLDatabaseResult} returns this
 */
proto.pfs_v2.EgressResponse.SQLDatabaseResult.prototype.clearRowsWrittenMap = function() {
  this.getRowsWrittenMap().clear();
  return this;};


/**
 * optional ObjectStorageResult object_storage = 1;
 * @return {?proto.pfs_v2.EgressResponse.ObjectStorageResult}
 */
proto.pfs_v2.EgressResponse.prototype.getObjectStorage = function() {
  return /** @type{?proto.pfs_v2.EgressResponse.ObjectStorageResult} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.EgressResponse.ObjectStorageResult, 1));
};


/**
 * @param {?proto.pfs_v2.EgressResponse.ObjectStorageResult|undefined} value
 * @return {!proto.pfs_v2.EgressResponse} returns this
*/
proto.pfs_v2.EgressResponse.prototype.setObjectStorage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.pfs_v2.EgressResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.EgressResponse} returns this
 */
proto.pfs_v2.EgressResponse.prototype.clearObjectStorage = function() {
  return this.setObjectStorage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.EgressResponse.prototype.hasObjectStorage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SQLDatabaseResult sql_database = 2;
 * @return {?proto.pfs_v2.EgressResponse.SQLDatabaseResult}
 */
proto.pfs_v2.EgressResponse.prototype.getSqlDatabase = function() {
  return /** @type{?proto.pfs_v2.EgressResponse.SQLDatabaseResult} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.EgressResponse.SQLDatabaseResult, 2));
};


/**
 * @param {?proto.pfs_v2.EgressResponse.SQLDatabaseResult|undefined} value
 * @return {!proto.pfs_v2.EgressResponse} returns this
*/
proto.pfs_v2.EgressResponse.prototype.setSqlDatabase = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs_v2.EgressResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.EgressResponse} returns this
 */
proto.pfs_v2.EgressResponse.prototype.clearSqlDatabase = function() {
  return this.setSqlDatabase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.EgressResponse.prototype.hasSqlDatabase = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.ReposSummaryRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ReposSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ReposSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ReposSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.pfs_v2.ProjectPicker.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ReposSummaryRequest}
 */
proto.pfs_v2.ReposSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ReposSummaryRequest;
  return proto.pfs_v2.ReposSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ReposSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ReposSummaryRequest}
 */
proto.pfs_v2.ReposSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.ProjectPicker;
      reader.readMessage(value,proto.pfs_v2.ProjectPicker.deserializeBinaryFromReader);
      msg.addProjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ReposSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ReposSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ReposSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.ProjectPicker.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProjectPicker projects = 1;
 * @return {!Array<!proto.pfs_v2.ProjectPicker>}
 */
proto.pfs_v2.ReposSummaryRequest.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.pfs_v2.ProjectPicker>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.ProjectPicker, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.ProjectPicker>} value
 * @return {!proto.pfs_v2.ReposSummaryRequest} returns this
*/
proto.pfs_v2.ReposSummaryRequest.prototype.setProjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.ProjectPicker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.ProjectPicker}
 */
proto.pfs_v2.ReposSummaryRequest.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.ProjectPicker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.ReposSummaryRequest} returns this
 */
proto.pfs_v2.ReposSummaryRequest.prototype.clearProjectsList = function() {
  return this.setProjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ReposSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ReposSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ReposSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: (f = msg.getProject()) && proto.pfs_v2.Project.toObject(includeInstance, f),
    userRepoCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ReposSummary}
 */
proto.pfs_v2.ReposSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ReposSummary;
  return proto.pfs_v2.ReposSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ReposSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ReposSummary}
 */
proto.pfs_v2.ReposSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.Project;
      reader.readMessage(value,proto.pfs_v2.Project.deserializeBinaryFromReader);
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserRepoCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ReposSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ReposSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ReposSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs_v2.Project.serializeBinaryToWriter
    );
  }
  f = message.getUserRepoCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Project project = 1;
 * @return {?proto.pfs_v2.Project}
 */
proto.pfs_v2.ReposSummary.prototype.getProject = function() {
  return /** @type{?proto.pfs_v2.Project} */ (
    jspb.Message.getWrapperField(this, proto.pfs_v2.Project, 1));
};


/**
 * @param {?proto.pfs_v2.Project|undefined} value
 * @return {!proto.pfs_v2.ReposSummary} returns this
*/
proto.pfs_v2.ReposSummary.prototype.setProject = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs_v2.ReposSummary} returns this
 */
proto.pfs_v2.ReposSummary.prototype.clearProject = function() {
  return this.setProject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs_v2.ReposSummary.prototype.hasProject = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 user_repo_count = 2;
 * @return {number}
 */
proto.pfs_v2.ReposSummary.prototype.getUserRepoCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ReposSummary} returns this
 */
proto.pfs_v2.ReposSummary.prototype.setUserRepoCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 size_bytes = 3;
 * @return {number}
 */
proto.pfs_v2.ReposSummary.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs_v2.ReposSummary} returns this
 */
proto.pfs_v2.ReposSummary.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs_v2.ReposSummaryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs_v2.ReposSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs_v2.ReposSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs_v2.ReposSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    summariesList: jspb.Message.toObjectList(msg.getSummariesList(),
    proto.pfs_v2.ReposSummary.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs_v2.ReposSummaryResponse}
 */
proto.pfs_v2.ReposSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs_v2.ReposSummaryResponse;
  return proto.pfs_v2.ReposSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs_v2.ReposSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs_v2.ReposSummaryResponse}
 */
proto.pfs_v2.ReposSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs_v2.ReposSummary;
      reader.readMessage(value,proto.pfs_v2.ReposSummary.deserializeBinaryFromReader);
      msg.addSummaries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs_v2.ReposSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs_v2.ReposSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs_v2.ReposSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs_v2.ReposSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs_v2.ReposSummary.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ReposSummary summaries = 1;
 * @return {!Array<!proto.pfs_v2.ReposSummary>}
 */
proto.pfs_v2.ReposSummaryResponse.prototype.getSummariesList = function() {
  return /** @type{!Array<!proto.pfs_v2.ReposSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs_v2.ReposSummary, 1));
};


/**
 * @param {!Array<!proto.pfs_v2.ReposSummary>} value
 * @return {!proto.pfs_v2.ReposSummaryResponse} returns this
*/
proto.pfs_v2.ReposSummaryResponse.prototype.setSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs_v2.ReposSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs_v2.ReposSummary}
 */
proto.pfs_v2.ReposSummaryResponse.prototype.addSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs_v2.ReposSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs_v2.ReposSummaryResponse} returns this
 */
proto.pfs_v2.ReposSummaryResponse.prototype.clearSummariesList = function() {
  return this.setSummariesList([]);
};


/**
 * @enum {number}
 */
proto.pfs_v2.OriginKind = {
  ORIGIN_KIND_UNKNOWN: 0,
  USER: 1,
  AUTO: 2,
  FSCK: 3
};

/**
 * @enum {number}
 */
proto.pfs_v2.FileType = {
  RESERVED: 0,
  FILE: 1,
  DIR: 2
};

/**
 * @enum {number}
 */
proto.pfs_v2.CommitState = {
  COMMIT_STATE_UNKNOWN: 0,
  STARTED: 1,
  READY: 2,
  FINISHING: 3,
  FINISHED: 4
};

/**
 * @enum {number}
 */
proto.pfs_v2.Delimiter = {
  NONE: 0,
  JSON: 1,
  LINE: 2,
  SQL: 3,
  CSV: 4
};

goog.object.extend(exports, proto.pfs_v2);
