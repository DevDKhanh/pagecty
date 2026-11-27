# ClaudeTranslator

Ứng dụng nhỏ chạy ngầm trên Windows: bôi đen chữ ở bất kỳ đâu rồi bấm phím tắt để dịch bằng **Claude Code** có sẵn trên máy (dùng tài khoản Claude đang đăng nhập, không cần API key).

| Phím tắt | Dịch sang |
|---|---|
| `Ctrl+Alt+V` | Tiếng Việt |
| `Ctrl+Alt+C` | Tiếng Trung (giản thể) |
| `Ctrl+Alt+Enter` | Thay bản dịch mới nhất vào đoạn đã bôi đen |

- Kết quả hiện trong **một ô duy nhất** gần con trỏ chuột; mỗi lần bấm chỉ cập nhật lại ô đó và không lấy mất focus của cửa sổ đang làm việc.
- Bản dịch được tự chép vào clipboard. Nút **Thay vào chỗ đã chọn** dán đè lên đoạn gốc.
- Biểu tượng **译** dưới khay hệ thống; chuột phải → **Thoát** để tắt.

## WeChat

- **Tin đến:** tin có chữ Trung trong cuộc trò chuyện đang mở được tự dịch sang tiếng Việt và hiện trong nhãn vàng cạnh bong bóng (model Haiku, gom nhiều tin một lần, có lưu cache).
- **Tin gửi đi:** gõ tiếng Việt trong ô chat WeChat → `Ctrl+Alt+C` → ô chat được thay bằng tiếng Trung → bạn tự bấm Enter.
- Bật/tắt: chuột phải biểu tượng **译** → **Tự dịch tin nhắn WeChat**.
- Chỉ dùng UI Automation của Windows (đọc/ghi giao diện như phần mềm đọc màn hình); không sửa file, không chèn code vào WeChat.
- Nội dung tin được gửi tới Claude để dịch; bản dịch lưu ở `%LOCALAPPDATA%\ClaudeTranslator\wechat_cache.json`.

## Yêu cầu

- Windows 10/11 với .NET Framework 4.x (có sẵn).
- App **Claude desktop** đã đăng nhập (app tự tìm `claude.exe` đi kèm), hoặc `claude.exe` trong `PATH`, hoặc đặt biến môi trường `CLAUDE_EXE`.
- Cần Internet. Mỗi lần dịch mất khoảng 6–10 giây.

## Biên dịch

```bat
build.bat
```

Tạo ra `ClaudeTranslator.exe` bằng `csc.exe` có sẵn của Windows, không cần cài thêm gì.

## Bật cùng Windows

Tạo shortcut tới `ClaudeTranslator.exe` trong thư mục `shell:startup`.

## Tuỳ chỉnh

Trong `ClaudeTranslator.cs`:

- `Model`: `"sonnet"` (mặc định, dịch hay) hoặc `"haiku"` (nhanh hơn).
- Lời nhắc dịch: `Vietnamese` / `Chinese`.

Log mỗi lần bấm phím: `%LOCALAPPDATA%\ClaudeTranslator\log.txt`.
