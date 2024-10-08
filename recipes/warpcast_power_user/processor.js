let fId = queryResult[0]?.result?.rows[0]?.fid;

// undefined fId means the address is not a Warpcast Power User
if (!fId) {
  throw new Error("Address is not a Warpcast Power User.");
}

return JSON.stringify([
  {
    name: "isWarpcastPowerUser",
    type: "bool",
    value: true,
  },
]);
