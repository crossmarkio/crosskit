import React, { useEffect, useState } from "react";

import sdk from "@crossmarkio/sdk";
import { EVENTS } from "@/typings/extension";
import useRerender from "@/components/hook/useRerender";

const Index = () => {
  console.log(sdk.session);

  const rerender = useRerender();
  useEffect(() => {
    sdk.on("all", rerender.call);
  }, []);
  return (
    <div className="tw-flex tw-h-full tw-flex-col tw-overflow-hidden tw-pt-14 tw-font-montserrat tw-text-p12 tw-uppercase tw-text-t1">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <div className="tw-flex tw-gap-3 tw-rounded-md tw-bg-tint tw-p-3">
          <div className="tw-font-bold">Address</div>
          <div className="tw-normal-case">{sdk.session.address}</div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-3 tw-rounded-md tw-bg-tint tw-p-3">
          <div className="tw-font-bold">Network</div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Socket</div>
            <div>{sdk.session.network?.wss}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Rpc</div>
            <div>{sdk.session.network?.rpc}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Type</div>
            <div>{sdk.session.network?.type}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Protocol</div>
            <div>{sdk.session.network?.protocol}</div>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-3 tw-rounded-md tw-bg-tint tw-p-3">
          <div className="tw-font-bold">User</div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Username</div>
            <div>{sdk.session.user?.username}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Type</div>
            <div>{sdk.session.user?.type}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Developer</div>
            <div>{sdk.session.user?.developer}</div>
          </div>
          <div className="tw-flex tw-gap-3 tw-pl-4">
            <div>Slug</div>
            <div>{sdk.session.user?.slug}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
