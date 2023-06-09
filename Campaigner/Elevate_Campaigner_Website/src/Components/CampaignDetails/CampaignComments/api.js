export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Murtaza",
      userId: null,
      parentId: null,
      createdAt: "2022-11-20T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "Basit",
      userId: null,
      parentId: null,
      createdAt: "2022-11-20T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Basit",
      userId: null,
      parentId: null,
      createdAt: "2022-11-20T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Basit",
      userId: null,
      parentId: null,
      createdAt: "2022-11-20T23:00:33.010+02:00",
    },
  ];
  // return [
  //   {
  //     id: "1",
  //     body: "First comment",
  //     username: "Murtaza",
  //     userId: "1",
  //     parentId: null,
  //     createdAt: "2022-11-20T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "2",
  //     body: "Second comment",
  //     username: "Basit",
  //     userId: "2",
  //     parentId: null,
  //     createdAt: "2022-11-20T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "3",
  //     body: "First comment first child",
  //     username: "Basit",
  //     userId: "2",
  //     parentId: "1",
  //     createdAt: "2022-11-20T23:00:33.010+02:00",
  //   },
  //   {
  //     id: "4",
  //     body: "Second comment second child",
  //     username: "Basit",
  //     userId: "2",
  //     parentId: "2",
  //     createdAt: "2022-11-20T23:00:33.010+02:00",
  //   },
  // ];
};

export const createComment = async (text, parentId = null, campaigner_name) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId: null,
    userId: null,
    username: campaigner_name,
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
