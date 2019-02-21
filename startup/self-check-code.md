# 代码自检
代码提交前，要自行通过相关工具进行检测，并养成良好的习惯。下面简要介绍几种检测工具和使用方法。

### SpotBugs / Eclipse 插件
JAVA 潜在 BUG 分析。在项目、包，或类上右键菜单，选择 `SpotBugs` > `Find Bugs`，分析完成后可以在 `Bug Explorer` 或 `Markers` 视图中查看结果。

### 单元测试覆盖率 / Eclipse 自带
在项目，或单元测试包、类上右键菜单，选择 `Coverage As` > `JUnit Test`，运行完毕后可在 `Coverage` 视图中查看结果（覆盖率百分比）。

### ESLint / VSCode 插件
JS 规范（遵循项目目录下的 eslint 配置规范）及潜在问题分析。插件安装后，在编写 JS 代码时即可实时提示问题所在。
