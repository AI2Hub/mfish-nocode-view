import { defHttp } from "/@/utils/http/axios";
import { ApiFolder, ReqApiFolder, ApiFolderPageModel } from "/@/api/nocode/model/ApiFolderModel";

/**
* @description: API目录
* @author: mfish
* @date: 2023-07-21
* @version: V1.0.0
*/
enum Api {
  ApiFolder = "/nocode/apiFolder"
}

/**
 * 分页列表查询
 *
 * @param reqApiFolder
 * @return
 */
export const getApiFolderList = (reqApiFolder?: ReqApiFolder) => {
  return defHttp.get<ApiFolderPageModel>({ url: Api.ApiFolder, params: reqApiFolder });
};

 /**
 * 导出API目录
 * @param reqApiFolder
 */
export function exportApiFolder(reqApiFolder?: ReqApiFolder) {
  return defHttp.download({ url: Api.ApiFolder + "/export", params: reqApiFolder });
};

/**
 * 新增API目录
 *
 * @param apiFolder
 * @return
 */
export function insertApiFolder(apiFolder: ApiFolder) {
  return defHttp.post<ApiFolder>({ url: Api.ApiFolder, params: apiFolder }, { successMessageMode: "message" });
};

/**
 * 修改API目录
 *
 * @param apiFolder
 * @return
 */
export function updateApiFolder(apiFolder: ApiFolder) {
  return defHttp.put<ApiFolder>({ url: Api.ApiFolder, params: apiFolder }, { successMessageMode: "message" });
};

/**
 * 删除API目录
 *
 * @param id 唯一ID
 * @return
 */
export function deleteApiFolder(id: string) {
  return defHttp.delete<ApiFolder>({ url: Api.ApiFolder + "/" + id }, { successMessageMode: "message" });
};
