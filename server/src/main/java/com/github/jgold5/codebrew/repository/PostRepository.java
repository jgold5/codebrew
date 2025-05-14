package com.github.jgold5.codebrew.repository;

import com.github.jgold5.codebrew.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
