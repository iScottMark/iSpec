# 脚本

此手册描述了 iSpec 的所有函数功能，并且一些无法在可视化界面中使用的功能也可以从 Python 脚本中进行调用。在 iSpec 目录中有一个名为 `example.py` 的文件，它实现了下面所列出的例子：

- `read_write_spectrum()`

- `convert_air_to_vacuum()`

- `plot()`

- `cut_spectrum_from_range()`

- `cut_spectrum_from_segments()`

- `determine_radial_velocity_with_mask()`

- `determine_radial_velocity_with_template()`

- `correct_radial_velocity()`

- `determine_tellurics_shift_with_mask()`

- `determine_tellurics_shift_with_template()`

- `degrade_resolution()`

- `smooth_spectrum()`

- `resample_spectrum()`

- `coadd_spectra()`

- `merge_spectra()`

- `normalize_spectrum_using_continuum_regions()`

- `normalize_spectrum_in_segments()`

- `normalize_whole_spectrum()`

- `normalize_whole_spectrum_ignoring_prefixed_strong_lines()`

- `normalize_whole_spectrum_with_template()`

- `filter_cosmic_rays()`

- `find_continuum_regions()`

- `find_continuum_regions_in_segments()`

- `find_linemasks()`

- `fit_lines_determine_ew_and_crossmatch_with_atomic_data(use_ares=False)`

- `fit_lines_determine_ew_and_crossmatch_with_atomic_data(use_ares=True)`

- `fit_lines_already_crossmatched_with_atomic_data_and_determine_ew(use_ares=False)`

- `fit_lines_already_crossmatched_with_atomic_data_and_determine_ew(use_ares=True)`

- `calculate_barycentric_velocity()`

- `estimate_snr_from_flux()`

- `estimate_snr_from_err()`

- `estimate_errors_from_snr()`

- `clean_spectrum()`

- `clean_telluric_regions()`

- `adjust_line_masks()`

- `create_segments_around_linemasks()`

- `synthesize_spectrum(code="spectrum")`

- `synthesize_spectrum(code="turbospectrum")`

- `synthesize_spectrum(code="sme")`

- `synthesize_spectrum(code="moog")`

- `synthesize_spectrum(code="synthe")`

- `interpolate_spectrum()`

- `add_noise_to_spectrum()`

- `generate_new_random_realizations_from_spectrum()`

- `precompute_synthetic_grid(code="spectrum")`

- `precompute_synthetic_grid(code="turbospectrum")`

- `precompute_synthetic_grid(code="sme")`

- `precompute_synthetic_grid(code="moog")`

- `precompute_synthetic_grid(code="synthe")`

- `determine_astrophysical_parameters_using_grid()`

- `determine_astrophysical_parameters_using_synth_spectra(code="spectrum")`

- `determine_astrophysical_parameters_using_synth_spectra(code="turbospectrum")`

- `determine_astrophysical_parameters_using_synth_spectra(code="sme")`

- `determine_astrophysical_parameters_using_synth_spectra(code="moog")`

- `determine_astrophysical_parameters_using_synth_spectra(code="synthe")`

- `estimate_initial_ap_with_precomputed_grid_and_determine_ap_using_synth_spectra(code="spectrum")`

- `estimate_initial_ap_with_precomputed_grid_and_determine_ap_using_synth_spectra(code="turbospectrum")`

- `estimate_initial_ap_with_precomputed_grid_and_determine_ap_using_synth_spectra(code="sme")`

- `estimate_initial_ap_with_precomputed_grid_and_determine_ap_using_synth_spectra(code="moog")`

- `estimate_initial_ap_with_precomputed_grid_and_determine_ap_using_synth_spectra(code="synthe")`

- `determine_abundances_using_synth_spectra(code="spectrum")`

- `determine_abundances_using_synth_spectra(code="turbospectrum")`

- `determine_abundances_using_synth_spectra(code="sme")`

- `determine_abundances_using_synth_spectra(code="moog")`

- `determine_abundances_using_synth_spectra(code="synthe")`

- `determine_abundances_line_by_line_using_synth_spectra(code="spectrum")`

- `determine_abundances_line_by_line_using_synth_spectra(code="turbospectrum")`

- `determine_abundances_line_by_line_using_synth_spectra(code="sme")`

- `determine_abundances_line_by_line_using_synth_spectra(code="moog")`

- `determine_abundances_line_by_line_using_synth_spectra(code="synthe")`

- `determine_loggf_line_by_line_using_synth_spectra(code="spectrum")`

- `determine_loggf_line_by_line_using_synth_spectra(code="turbospectrum")`

- `determine_loggf_line_by_line_using_synth_spectra(code="sme")`

- `determine_loggf_line_by_line_using_synth_spectra(code="moog")`

- `determine_loggf_line_by_line_using_synth_spectra(code="synthe")`

- `determine_astrophysical_parameters_from_ew(code="moog", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_astrophysical_parameters_from_ew(code="moog", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_astrophysical_parameters_from_ew(code="width", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_astrophysical_parameters_from_ew(code="width", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_astrophysical_parameters_from_ew(code="spectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_astrophysical_parameters_from_ew(code="spectrum", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_astrophysical_parameters_from_ew(code="turbospectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_astrophysical_parameters_from_ew(code="turbospectrum", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_abundances_from_ew(code="spectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="turbospectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="spectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="turbospectrum", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="moog", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="moog", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_abundances_from_ew(code="width", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="width", use_lines_already_crossmatched_with_atomic_data=False)`

- `determine_abundances_from_ew(code="moog", use_lines_already_crossmatched_with_atomic_data=True)`

- `determine_abundances_from_ew(code="width", use_lines_already_crossmatched_with_atomic_data=True)`

- `calculate_theoretical_ew_and_depth()`

- `paralelize_code()`

- `estimate_vmic_from_empirical_relation()`

- `estimate_vmac_from_empirical_relation()`

- `generate_and_plot_YY_isochrone()`

- `interpolate_atmosphere(code="spectrum")`

- `interpolate_atmosphere(code="turbospectrum")`

- `interpolate_atmosphere(code="moog")`

最简单的脚本使用方法就是复制一份 (:joy: [Ctrl] + [C] 大法)，而后清除所有的函数功能，只保留符合用户需求的那部分。

脚本里的变量 `ispec_dir` 应该指向 iSpec 的安装路径，比如：

``` python
#--- iSpec directory -------------------------------------------------------------
ispec_dir = '/home/virtual/iSpec/'
sys.path.insert(0, os.path.abspath(ispec_dir))
import ispec
```

在终端输入 `python example.py` 即可执行该脚本。
