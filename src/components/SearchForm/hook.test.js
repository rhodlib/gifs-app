import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "./hook";

const setup = params => renderHook(() => useForm(params));

test("should change keyword and rating", () => {
    const { result } = setup();
    act(() => {
        result.current.updateKeyword("matrix");
        result.current.updateRating("r");
    });
    expect(result.current.keyword).toBe("matrix");
    expect(result.current.rating).toBe("r");
});

test("should use initial values", () => {
    const { result } = setup({
        initialKeyword: "avengers",
    });

    expect(result.current.keyword).toBe("avengers");
});
