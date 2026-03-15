#!/bin/bash
# start.sh - 启动Jekyll学术作品集网站预览

# 设置颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 服务器配置
PORT=4000
HOST="127.0.0.1"
URL="http://${HOST}:${PORT}"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   Jekyll学术作品集网站启动脚本${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# 检查是否有正在运行的Jekyll服务器
echo -e "${YELLOW}检查是否有正在运行的Jekyll服务器...${NC}"
if command -v lsof >/dev/null 2>&1; then
    RUNNING_PIDS=$(lsof -ti:${PORT} 2>/dev/null || true)
    if [ -n "$RUNNING_PIDS" ]; then
        echo "发现端口 ${PORT} 被占用，正在停止相关进程..."
        for PID in $RUNNING_PIDS; do
            kill $PID 2>/dev/null || true
        done
        sleep 2
    else
        echo "端口 ${PORT} 可用。"
    fi
fi

# 检查Ruby依赖
echo ""
echo -e "${YELLOW}检查Ruby依赖...${NC}"
if ! command -v bundle >/dev/null 2>&1; then
    echo "错误: bundle 命令未找到，请确保Ruby已安装。"
    exit 1
fi

if [ ! -f "Gemfile" ]; then
    echo "错误: Gemfile 未找到。"
    exit 1
fi

# 检查是否已安装依赖
echo "检查Gemfile依赖..."
if bundle check >/dev/null 2>&1; then
    echo "依赖已安装。"
else
    echo -e "${YELLOW}依赖未安装，正在安装...${NC}"
    if ! bundle install; then
        echo "错误: 依赖安装失败。"
        exit 1
    fi
    echo "依赖安装完成。"
fi

# 清理并构建网站
echo ""
echo -e "${YELLOW}构建网站...${NC}"
if ! bundle exec jekyll build; then
    echo "错误: 网站构建失败。"
    exit 1
fi
echo "网站构建完成。"

# 显示服务器信息
echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  服务器已启动！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "  访问地址: ${BLUE}${URL}${NC}"
echo -e "  按 ${YELLOW}Ctrl+C${NC} 停止服务器"
echo ""
echo -e "${YELLOW}正在启动实时预览服务器...${NC}"
echo ""

# 启动Jekyll服务器
bundle exec jekyll serve \
  --host "${HOST}" \
  --port "${PORT}" \
  --livereload \
  --trace