/**
 * overloading
 */

function stringOrString(members: string): string;
function stringOrString(
  member1: string,
  member2: string,
  member3: string
): string;

/**
 * 만약 하나의 파라미터만 입력받는다면
 */
function stringOrString(
  memberOrMebers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `아이브: ${memberOrMebers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMebers}`;
  }
}
