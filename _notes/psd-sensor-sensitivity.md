---
title: "功率谱密度的理解"
date: 2026-03-24
description: "功率谱密度、谱估计与传感器的灵敏度"
categories:
  - "信号处理"
tags:
  - "量子精密测量"
  - "信号处理"
---


## 一、 PSD 的本质

**1. 定义**

功率谱密度（PSD）是信号“功率”在频域的**密度分布**，可以类比概率密度函数:
$$S(f) = \lim_{\Delta f \to 0} \frac{\Delta P}{\Delta f}$$

其物理意义是：在频点 $f$ 处的**单位带宽内所包含的平均功率**。如果原始信号是电压（$\text{V}$）或磁场（$\text{T}$），PSD 的单位严格为 $\text{V}^2/\text{Hz}$ 或 $\text{T}^2/\text{Hz}$

> 当我们提及PSD的时候，一定要指明频点，如 $10^{-6}\text{ V}^2/\text{Hz}$@10Hz，不指明频点毫无意义。

**2. 仪器的测量功率**

在仪器测量带宽 $\Delta f$ 内（测量中心频点是$f_0$）对PSD进行积分，得到的是该仪器可以测量的信号平均功率

$$P \approx S(f_0) \cdot \Delta f$$



## 二、 PSD 计算公式推导

离散傅里叶变换和帕斯瓦尔定理(能量守恒)：
$$X_k = \sum x_n e^{-j 2\pi k n / N} \Rightarrow \sum |x_n|^2 = \frac{1}{N} \sum |X_k|^2$$


- **时域平均功率**：$P_{time} = \frac{1}{N} \sum_{n=0}^{N-1} |x_n|^2$
- **频域平均功率**：$P_{freq} = \sum_{k=0}^{N-1} \text{PSD}[k] \cdot \Delta f$（其中频率分辨率 $\Delta f = \frac{1}{T}=\frac{f_s}{N}$，采样点数 $N = f_s T$）

令 $P_{time} = P_{freq}$，并在每个频点 $k$ 上对齐：

$$
\text{PSD}[k] \cdot \frac{f_s}{N} = \frac{|X_k|^2}{N^2} \Rightarrow \text{PSD}[k] = \frac{|X_k|^2}{f_s N}
$$

> $X_k$ 是直接做 FFT 后得到的复数振幅，单位与时域物理量完全相同


## 三、周期图 vs Welch 方法
**1.Periodogram**
直接对全长为 $N = f_sT$ 的数据做一次 FFT 并求模方,然后归一(保证时域、频域能量一致)
$$
x_n \rightarrow X_k \rightarrow \frac{|X_k|^2}{f_s N}
$$
- 频率分辨率 $\Delta f = 1/T = f_s / N$
- 估计方差大, 无论观测时间 $T$ 多长(随机信号做**单次**FFT必然误差大)

**2. Welch方法**

**牺牲频率分辨率**，换取低方差

![PSD分析流程图](/assets/images/Welch.png)

- **分段 (Segment)**：将总数据切分为 $K$ 段，每段长度 $L$(总长度$N=KL$)
- **重叠 (Overlap)**：相邻段通常保留 50% 重叠
- **加窗 (Windowing)**：每段乘以平滑窗函数，压制频带泄露
- **平均 (Averaging)**：分别计算各段 PSD 后，在同一频率点上求平均
- **物理收益**：PSD曲线的方差是单次PSD计算的 $1/\sqrt{K}$ 倍，频率分辨率 $1/L$
> n 次测量会将方差降低  $\frac{1}{\sqrt{n}}$

## 四、 灵敏度极限

**1. 从 PSD 反推最小可测信号振幅 ($A_{min}$)**

在量子精密测量领域，如果一个传感器在频点 $f_0$ 处的本底功率谱密度为 $S_n(f_0)$，我们称该仪器的灵敏度是 **$S_n(f_0)$@$f_0$** 

#### 为什么如此定义？
当我们想要探测一个频率为 $f_0$、振幅为 $A$ 的微弱正弦波信号，底线要求是信噪比 $\text{SNR} = 1$（即信号功率 = 观测带宽内的噪声功率）
- 信号功率：$P_{sig} = \frac{A^2}{2}$
- 观测带内噪声功率：$P_{noise} = S_n(f_0) \cdot \Delta f$

令二者相等：
$$A_{min} = \sqrt{2 \cdot S_n(f_0) \cdot \Delta f} \Rightarrow \frac{A_{min}}{\sqrt{2 \cdot \Delta f}} = \sqrt{S_n(f_0)}$$

即我们要探测的信号振幅下限严格正比于传感器在该频点 PSD 的平方根，我们就把传感器底噪 $S_n(f_0)$ 当作灵敏度，灵敏度指标单位是 **$\text{单位}/\sqrt{\text{Hz}}$**

#### 为什么观测时间越长，灵敏度越好？
- 频率分辨率 $\Delta f = 1/T$ 随时间增加而变小
- 本底白噪声可以认为均匀分布在全频段，$\Delta f$ 越小，观测频带越窄，漏进 **目标频率区间bin** 的噪声能量越小
- 真实物理信号保持绝对**相干**（严格的单频窄带），其能量就不会随 $\Delta f$ 减小而衰减
- 长周期观测使传感器能够捕获振幅更小的物理信号