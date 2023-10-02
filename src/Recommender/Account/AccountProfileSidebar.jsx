const accountId = props.accountId || context.accountId;
const profile = props.profile || Social.get(`${accountId}/profile/**`, "final");
const profileUrl = `#/${REPL_ACCOUNT}/widget/ProfilePage?accountId=${accountId}`;
const verifications = props.verifications;

const Wrapper = styled.a`
  display: inline-grid;
  width: 100%;
  align-items: center;
  gap: 12px;
  grid-template-columns: auto 1fr;
  cursor: pointer;
  margin: 0;
  color: #687076 !important;
  outline: none;
  text-decoration: none !important;
  background: none !important;
  border: none;
  text-align: left;
  padding: 0;

  > * {
    min-width: 0;
  }

  .hover-state1 {
    opacity: 0;
  }

  .hover-state2 {
    opacity: 1;
  }

  &:hover,
  &:focus {
    div.hover {
      border-color: #d0d5dd;
    }
    .hover-state1 {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    .hover-state2 {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
`;

const AvatarCount = styled.div`
  color: rgb(104, 112, 118);
  font-size: 14px;
  font-weight: 300;
  position: absolute;
  right: 0px;
  padding-right: 20px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${(p) => (p.bold ? "#11181C" : "#687076")};
  font-weight: ${(p) => (p.bold ? "600" : "400")};
  font-size: ${(p) => (p.small ? "10px" : "14px")};
  overflow: ${(p) => (p.ellipsis ? "hidden" : "")};
  text-overflow: ${(p) => (p.ellipsis ? "ellipsis" : "")};
  white-space: nowrap; 
`;

const Avatar = styled.div`
  width: ${props.avatarSize || "40px"};
  height: ${props.avatarSize || "40px"};
  flex-shrink: 0;
  border: 1px solid #eceef0;
  overflow: hidden;
  border-radius: 40px;
  transition: border-color 200ms;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const VerifiedBadge = styled.div`
  position: absolute;
  left: 24px;
  top: 22px;
`;
const Name = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const AccountProfile = (
  <Wrapper
    as={props.onClick ? "button" : "a"}
    href={!props.onClick && profileUrl}
    onClick={props.onClick && (() => props.onClick(accountId))}
  >
    <Avatar className="hover">
      <Widget
        src="${REPL_ACCOUNT}/widget/Recommender.Engagement.ImageTracked"
        props={{
          accountId: props.accountId,
          accountIdRank: props.accountIdRank,
          fromContext: props.fromContext,
          profileImage: props.profileImage || profile.image,
          profileImageAlt: props.profileName || profile.name,
        }}
      />
    </Avatar>

    {verifications && (
      <VerifiedBadge>
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.2325 11.8525C26.7613 11.36 26.2738 10.8525 26.09 10.4062C25.92 9.9975 25.91 9.32 25.9 8.66375C25.8812 7.44375 25.8612 6.06125 24.9 5.1C23.9387 4.13875 22.5563 4.11875 21.3363 4.1C20.68 4.09 20.0025 4.08 19.5938 3.91C19.1488 3.72625 18.64 3.23875 18.1475 2.7675C17.285 1.93875 16.305 1 15 1C13.695 1 12.7162 1.93875 11.8525 2.7675C11.36 3.23875 10.8525 3.72625 10.4062 3.91C10 4.08 9.32 4.09 8.66375 4.1C7.44375 4.11875 6.06125 4.13875 5.1 5.1C4.13875 6.06125 4.125 7.44375 4.1 8.66375C4.09 9.32 4.08 9.9975 3.91 10.4062C3.72625 10.8512 3.23875 11.36 2.7675 11.8525C1.93875 12.715 1 13.695 1 15C1 16.305 1.93875 17.2837 2.7675 18.1475C3.23875 18.64 3.72625 19.1475 3.91 19.5938C4.08 20.0025 4.09 20.68 4.1 21.3363C4.11875 22.5563 4.13875 23.9387 5.1 24.9C6.06125 25.8612 7.44375 25.8812 8.66375 25.9C9.32 25.91 9.9975 25.92 10.4062 26.09C10.8512 26.2738 11.36 26.7612 11.8525 27.2325C12.715 28.0612 13.695 29 15 29C16.305 29 17.2837 28.0612 18.1475 27.2325C18.64 26.7612 19.1475 26.2738 19.5938 26.09C20.0025 25.92 20.68 25.91 21.3363 25.9C22.5563 25.8812 23.9387 25.8612 24.9 24.9C25.8612 23.9387 25.8812 22.5563 25.9 21.3363C25.91 20.68 25.92 20.0025 26.09 19.5938C26.2738 19.1488 26.7613 18.64 27.2325 18.1475C28.0613 17.285 29 16.305 29 15C29 13.695 28.0613 12.7162 27.2325 11.8525Z"
            fill="white"
          />
          <path
            d="M11.8525 27.2325L11.5061 27.593C11.5221 27.6084 11.5382 27.6239 11.5545 27.6396C12.3785 28.432 13.4893 29.5 15 29.5C16.5081 29.5 17.6167 28.4355 18.4409 27.6439C18.4586 27.6269 18.4762 27.61 18.4937 27.5933L18.4974 27.5897C18.7452 27.3526 18.981 27.127 19.2083 26.9374C19.441 26.7432 19.6326 26.6147 19.7841 26.5523L19.7858 26.5517C19.9159 26.4976 20.1237 26.4572 20.4134 26.4333C20.6959 26.4099 21.0117 26.405 21.3439 26.3999L21.3439 26.3999C21.3688 26.3996 21.3939 26.3992 21.4192 26.3988C22.5866 26.3814 24.149 26.3581 25.2536 25.2536C26.3581 24.149 26.3814 22.5866 26.3988 21.4192C26.3992 21.3939 26.3996 21.3688 26.3999 21.3439L26.3999 21.3439C26.405 21.0117 26.4099 20.6959 26.4333 20.4134C26.4572 20.1237 26.4976 19.9159 26.5517 19.7858L26.5522 19.7846C26.6146 19.6334 26.7432 19.4417 26.9375 19.2086C27.1282 18.9799 27.3553 18.7424 27.5938 18.4932L27.2325 18.1475L27.593 18.4939C27.6084 18.4779 27.6239 18.4618 27.6396 18.4455C28.432 17.6215 29.5 16.5107 29.5 15C29.5 13.4919 28.4355 12.3833 27.6439 11.5591C27.6269 11.5414 27.61 11.5238 27.5933 11.5063L27.5897 11.5026C27.3525 11.2547 27.127 11.019 26.9374 10.7917C26.7432 10.559 26.6147 10.3674 26.5523 10.2159L26.5517 10.2142C26.4976 10.0841 26.4572 9.87629 26.4333 9.58663C26.4099 9.30407 26.405 8.9883 26.3999 8.65613L26.3999 8.65607C26.3996 8.63117 26.3992 8.60609 26.3988 8.58081C26.3814 7.41339 26.3581 5.85096 25.2536 4.74645C24.149 3.64194 22.5866 3.61862 21.4192 3.60119C21.3939 3.60082 21.3688 3.60044 21.3439 3.60006L21.3439 3.60006C21.0117 3.595 20.6959 3.59005 20.4134 3.5667C20.1237 3.54276 19.9159 3.50244 19.7858 3.44833L19.7846 3.44785C19.6334 3.38541 19.4417 3.25682 19.2086 3.06253C18.9799 2.8718 18.7424 2.64467 18.4932 2.40624L18.1475 2.7675M11.8525 27.2325L11.5068 27.5938C11.2576 27.3553 11.0201 27.1282 10.7914 26.9375C10.5583 26.7432 10.3666 26.6146 10.2154 26.5522L10.2142 26.5517C10.0841 26.4976 9.87629 26.4572 9.58663 26.4333C9.30407 26.4099 8.9883 26.405 8.65613 26.3999L8.65607 26.3999C8.63117 26.3996 8.60609 26.3992 8.58081 26.3988C7.4134 26.3814 5.85096 26.3581 4.74645 25.2536C3.64194 24.149 3.61862 22.5866 3.60119 21.4192C3.60082 21.3939 3.60044 21.3688 3.60006 21.3439L3.60006 21.3439C3.595 21.0117 3.59005 20.6959 3.5667 20.4134C3.54276 20.1237 3.50244 19.9159 3.44834 19.7858L3.44766 19.7841C3.38526 19.6326 3.25683 19.441 3.06263 19.2083C2.87301 18.981 2.6475 18.7453 2.41036 18.4975L2.40671 18.4937C2.38998 18.4762 2.3731 18.4586 2.3561 18.4409C1.56453 17.6167 0.5 16.5081 0.5 15C0.5 13.4893 1.56804 12.3785 2.36043 11.5545C2.37605 11.5382 2.39157 11.5221 2.40696 11.5061L2.7675 11.8525L2.40624 11.5068C2.64467 11.2576 2.8718 11.0201 3.06253 10.7914C3.25682 10.5583 3.38541 10.3666 3.44785 10.2154L3.44833 10.2142C3.50244 10.0841 3.54276 9.87629 3.5667 9.58663C3.59005 9.30407 3.595 8.9883 3.60006 8.65613L3.6001 8.65351H3.6001C3.60089 8.61532 3.60164 8.57667 3.6024 8.53758C3.62489 7.37913 3.65481 5.83809 4.74645 4.74645C5.85096 3.64194 7.41339 3.61862 8.58081 3.60119C8.60609 3.60082 8.63117 3.60044 8.65607 3.60006L8.65613 3.60006C8.98831 3.595 9.30472 3.59005 9.58761 3.5667C9.87795 3.54272 10.0851 3.50238 10.2132 3.44876L10.2159 3.44765L10.2159 3.44766C10.3674 3.38526 10.559 3.25683 10.7917 3.06263C11.019 2.873 11.2547 2.64748 11.5025 2.41033L11.5063 2.40671C11.5238 2.38998 11.5413 2.3731 11.5591 2.3561C12.3833 1.56453 13.4919 0.5 15 0.5C16.5107 0.5 17.6215 1.56804 18.4455 2.36043C18.4618 2.37605 18.4779 2.39157 18.4939 2.40696L18.1475 2.7675M11.8525 27.2325L11.8483 27.2284C11.3571 26.7585 10.85 26.2732 10.4062 26.09H19.5938C19.1509 26.2723 18.6478 26.7538 18.1588 27.2217L18.1475 27.2325C17.2837 28.0612 16.305 29 15 29C13.695 29 12.715 28.0612 11.8525 27.2325ZM18.1475 2.7675L18.1518 2.77157C18.6429 3.24155 19.15 3.72678 19.5938 3.91H10.4062C10.8491 3.72766 11.3522 3.24622 11.8412 2.77836L11.8525 2.7675C12.7162 1.93875 13.695 1 15 1C16.305 1 17.285 1.93875 18.1475 2.7675Z"
            stroke="white"
            stroke-opacity="0.923"
          />
          <path
            d="M27.2325 11.8525C26.7613 11.36 26.2738 10.8525 26.09 10.4062C25.92 9.9975 25.91 9.32 25.9 8.66375C25.8812 7.44375 25.8612 6.06125 24.9 5.1C23.9387 4.13875 22.5563 4.11875 21.3363 4.1C20.68 4.09 20.0025 4.08 19.5938 3.91C19.1488 3.72625 18.64 3.23875 18.1475 2.7675C17.285 1.93875 16.305 1 15 1C13.695 1 12.7162 1.93875 11.8525 2.7675C11.36 3.23875 10.8525 3.72625 10.4062 3.91C10 4.08 9.32 4.09 8.66375 4.1C7.44375 4.11875 6.06125 4.13875 5.1 5.1C4.13875 6.06125 4.125 7.44375 4.1 8.66375C4.09 9.32 4.08 9.9975 3.91 10.4062C3.72625 10.8512 3.23875 11.36 2.7675 11.8525C1.93875 12.715 1 13.695 1 15C1 16.305 1.93875 17.2837 2.7675 18.1475C3.23875 18.64 3.72625 19.1475 3.91 19.5938C4.08 20.0025 4.09 20.68 4.1 21.3363C4.11875 22.5563 4.13875 23.9387 5.1 24.9C6.06125 25.8612 7.44375 25.8812 8.66375 25.9C9.32 25.91 9.9975 25.92 10.4062 26.09C10.8512 26.2738 11.36 26.7612 11.8525 27.2325C12.715 28.0612 13.695 29 15 29C16.305 29 17.2837 28.0612 18.1475 27.2325C18.64 26.7612 19.1475 26.2738 19.5938 26.09C20.0025 25.92 20.68 25.91 21.3363 25.9C22.5563 25.8812 23.9387 25.8612 24.9 24.9C25.8612 23.9387 25.8812 22.5563 25.9 21.3363C25.91 20.68 25.92 20.0025 26.09 19.5938C26.2738 19.1488 26.7613 18.64 27.2325 18.1475C28.0613 17.285 29 16.305 29 15C29 13.695 28.0613 12.7162 27.2325 11.8525ZM20.7075 11.2925C20.8005 11.3854 20.8742 11.4957 20.9246 11.6171C20.9749 11.7385 21.0008 11.8686 21.0008 12C21.0008 12.1314 20.9749 12.2615 20.9246 12.3829C20.8742 12.5043 20.8005 12.6146 20.7075 12.7075L13.7075 19.7075C13.6146 19.8005 13.5043 19.8742 13.3829 19.9246C13.2615 19.9749 13.1314 20.0008 13 20.0008C12.8686 20.0008 12.7385 19.9749 12.6171 19.9246C12.4957 19.8742 12.3854 19.8005 12.2925 19.7075L9.2925 16.7075C9.10486 16.5199 8.99944 16.2654 8.99944 16C8.99944 15.7346 9.10486 15.4801 9.2925 15.2925C9.48014 15.1049 9.73464 14.9994 10 14.9994C10.2654 14.9994 10.5199 15.1049 10.7075 15.2925L13 17.5863L19.2925 11.2925C19.3854 11.1995 19.4957 11.1258 19.6171 11.0754C19.7385 11.0251 19.8686 10.9992 20 10.9992C20.1314 10.9992 20.2615 11.0251 20.3829 11.0754C20.5043 11.1258 20.6146 11.1995 20.7075 11.2925Z"
            fill="#202425"
          />
        </svg>
      </VerifiedBadge>
    )}

    <div>
      <Name>
        <Widget
          src="${REPL_ACCOUNT}/widget/Recommender.Engagement.ProfileInfoTracked"
          props={{
            accountId: props.accountId,
            accountIdRank: props.accountIdRank,
            fromContext: props.fromContext,
            profileName:
              props.profileName || profile.name || accountId.split(".near")[0],
            profileUrl: profileUrl,
            inlineContent: props.inlineContent,
            blockHeight: props.blockHeight,
            becauseYouFollow: props.becauseYouFollow,
            scope: props.scope || null,
          }}
        />
      </Name>
    </div>
  </Wrapper>
);

if (props.noOverlay) return AccountProfile;

return (
  <Widget
    src="${REPL_ACCOUNT}/widget/Recommender.Account.AccountProfileOverlay"
    props={{
      accountId: props.accountId,
      accountIdRank: props.accountIdRank || null,
      profile,
      children: AccountProfile,
      placement: "left",
      verifications,
      becauseYouFollow:
        props.scope === "friends" ? props.becauseYouFollow : null,
      scope: props.scope || null,
      fromContext: props.fromContext,
    }}
  />
);
