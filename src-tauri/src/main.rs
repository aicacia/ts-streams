#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

pub fn main() {
    aicacia_streams::AppBuilder::new().run();
}
