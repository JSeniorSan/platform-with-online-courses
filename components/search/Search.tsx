"use client";
import { KeyboardEvent } from "react";
import styles from "./search.module.scss";
import cn from "classnames";
import { ISearch } from "./Search.props";
import Input from "../input/Input";
import { useState } from "react";
import { Button } from "../button/Button";
import GlassIcon from "../ui/GlassIcon";
import { useRouter } from "next/navigation";
function Search({ className, ...props }: ISearch) {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push("/search");
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleEnter}
      />
      <Button appearence="primary" className={styles.btn} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
}

export default Search;
