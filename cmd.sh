# cargo update redoes all version resolution, picking newer versions of dependencies.
# cargo generate-lockfile also redoes all version resolution. (I'm not actually sure how it differs from update)
# cargo build/check/test fixes the versions of the crates in your workspace and does nothing else. (when I tried it I saw it only modified a single line in Cargo.lock)