export const statusMenu = [
  {
    korStatus: "승인대기",
    engStatus: "IN_REVIEW",
  },
  {
    korStatus: "수정요청",
    engStatus: "IN_MODIFICATION",
  },
  {
    korStatus: "계약대기",
    engStatus: "READY_FOR_CONTRACT"
  },
  {
    korStatus: "가입완료",
    engStatus: "APPROVED"
  },
  {
    korStatus: "가입거부",
    engStatus: "DENIED"
  }
];

export const activeMenu = [
  {
    korStatus: "활동 가능",
    engStatus: "ACTIVE",
  },
  {
    korStatus: "활동 정지(30일)",
    engStatus: "BLOCKED_TEMPORARY",
  },
  {
    korStatus: "활동 정지(무기한)",
    engStatus: "BLOCKED_LIFETIME",
  }
];

export const depositMenu = [
  {
    korStatus: "일시 정지",
    engStatus: "paused",
  },
  {
    korStatus: "입금 대기",
    engStatus: "deposit",
  },
  {
    korStatus: "입금 완료",
    engStatus: "completed",
  }
];