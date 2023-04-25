import { observer } from "mobx-react";
import { IApp } from "../../../../../../model/IApp";
import AppStore from "../../../../../../stores/AppStore";
import AppCardUI from "./../../children/app-card";
import { AppViewWrapper } from "../../style/default";
import EmptyStateUI from "./../../../../../../common/empty-state";

type AppViewProps = {
  isFetching?: boolean;
};

const AppViewUI = ({ isFetching }: AppViewProps) => {
  if (
    !(AppStore.searchInput === null
      ? AppStore.getList
      : AppStore.getSearchResults) ||
    (AppStore.searchInput === null
      ? AppStore.getList
      : AppStore.getSearchResults
    )?.length === 0
  ) {
    return <EmptyStateUI />;
  }

  return (
    <AppViewWrapper>
      {(AppStore.searchInput === null
        ? AppStore.getList
        : AppStore.getSearchResults
      ).map((item: IApp, index: number) => {
        return <AppCardUI key={index} app={item} />;
      })}
      {isFetching ? "Fetch more apps..." : null}
    </AppViewWrapper>
  );
};

export default observer(AppViewUI);
