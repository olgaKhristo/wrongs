SELECT
p1.person_name AS perp,
w.description AS incident,
p2.person_name AS victim
FROM
wrong w
JOIN
person p1 on w.perpetrator_id = p1.person_id
JOIN
person p2 on w.victim_id = p2.person_id
