let vouchCount = queryResult[0].data.aggregateAttestation?._count?.id;

if (!vouchCount || vouchCount < 10) {
  throw new Error("You need at least 10 vouches to create this attestation.");
}

return JSON.stringify([
  {
    name: "activeUser",
    type: "bool",
    value: true,
  },
]);
