export const HandelStatus = (
  status: number,
  message?: string,
  result?: object
) => {
  switch (status) {
    case 201:
    case 200:
      return { status: status, message: message || "Thành công", result };
    case 204:
      return { status: status, message: message || "Thiếu dữ liệu" };
    case 302:
      return { status: status, message: message || "Đã tồn tại" };
    case 404:
      return { status: status, message: message || "Không tồn tại" };
    case 300:
      return { status: status, message: message || "Thất bại" };
  }
};
