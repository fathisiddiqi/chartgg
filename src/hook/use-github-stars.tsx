"use client";

import { useEffect, useState } from "react";

interface GitHubRepoStats {
  stargazers_count: number;
  loading: boolean;
  error: string | null;
}

export function useGithubStars(owner: string, repo: string) {
  const [stats, setStats] = useState<GitHubRepoStats>({
    stargazers_count: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repository stats");
        }
        const data = await response.json();
        setStats({
          stargazers_count: data.stargazers_count,
          loading: false,
          error: null,
        });
      } catch (error) {
        setStats({
          stargazers_count: 0,
          loading: false,
          error: error instanceof Error ? error.message : "An error occurred",
        });
      }
    };

    fetchStars();
  }, [owner, repo]);

  return stats;
}
